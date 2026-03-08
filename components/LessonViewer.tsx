import React, { useState } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, X, GraduationCap, Layers } from 'lucide-react';
import { LESSONS, Lesson } from '../lessonData';
import TextRenderer from './TextRenderer';

interface LessonViewerProps {
    isOpen: boolean;
    onClose: () => void;
}

const LessonViewer: React.FC<LessonViewerProps> = ({ isOpen, onClose }) => {
    const [selectedPart, setSelectedPart] = useState<'A' | 'B'>('A');
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!isOpen) return null;

    const filteredLessons = LESSONS.filter(l => l.part === selectedPart);

    const handleSelectLesson = (lesson: Lesson) => {
        setSelectedLesson(lesson);
        setCurrentSlide(0);
    };

    const handleBack = () => {
        setSelectedLesson(null);
        setCurrentSlide(0);
    };

    const handleNextSlide = () => {
        if (selectedLesson && currentSlide < selectedLesson.slides.length - 1) {
            setCurrentSlide(prev => prev + 1);
        }
    };

    const handlePrevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">

                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">
                                {selectedLesson ? `${selectedLesson.unitNumber}: ${selectedLesson.title}` : 'HỌC TIẾNG ANH GIAO TIẾP'}
                            </h2>
                            <p className="text-sm opacity-80">
                                {selectedLesson
                                    ? `Slide ${currentSlide + 1}/${selectedLesson.slides.length}`
                                    : 'New York English Center • Trung tâm Vạn Hạnh'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {selectedLesson && (
                            <button
                                onClick={handleBack}
                                className="p-2 hover:bg-white/20 rounded-xl transition-colors text-sm font-medium flex items-center gap-1"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Danh sách
                            </button>
                        )}
                        <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-xl transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    {!selectedLesson ? (
                        /* LESSON LIST */
                        <div className="p-6">
                            {/* Part Tabs */}
                            <div className="flex gap-2 mb-6">
                                <button
                                    onClick={() => setSelectedPart('A')}
                                    className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2
                    ${selectedPart === 'A'
                                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                                >
                                    <Layers className="w-4 h-4" />
                                    PART A – Cơ bản
                                </button>
                                <button
                                    onClick={() => setSelectedPart('B')}
                                    className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2
                    ${selectedPart === 'B'
                                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                                >
                                    <Layers className="w-4 h-4" />
                                    PART B – Nâng cao
                                </button>
                            </div>

                            {/* Unit Cards */}
                            <div className="grid gap-3">
                                {filteredLessons.map((lesson, idx) => (
                                    <button
                                        key={lesson.id}
                                        onClick={() => handleSelectLesson(lesson)}
                                        className="w-full text-left p-4 bg-white border-2 border-gray-100 rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all group flex items-center gap-4"
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white shadow-md flex-shrink-0
                      ${selectedPart === 'A' ? 'bg-gradient-to-br from-indigo-500 to-blue-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`}>
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{lesson.unitNumber}</p>
                                            <h3 className="text-base font-bold text-gray-800 truncate group-hover:text-indigo-600 transition-colors">
                                                {lesson.title}
                                            </h3>
                                            <p className="text-xs text-gray-400 mt-1">{lesson.slides.length} slides</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-indigo-500 transition-colors flex-shrink-0" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* SLIDE VIEW */
                        <div className="p-6">
                            {/* Slide Progress Dots */}
                            <div className="flex justify-center gap-2 mb-6">
                                {selectedLesson.slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide
                                                ? 'bg-indigo-600 scale-125 shadow-md'
                                                : idx < currentSlide
                                                    ? 'bg-indigo-300'
                                                    : 'bg-gray-200'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Slide Content */}
                            <div className="bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-2xl p-6 md:p-8 border border-gray-100 min-h-[300px]">
                                <h3 className="text-lg md:text-xl font-bold text-indigo-900 mb-6 pb-3 border-b-2 border-indigo-100 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-indigo-500" />
                                    {selectedLesson.slides[currentSlide].title}
                                </h3>

                                <div className="space-y-4">
                                    {selectedLesson.slides[currentSlide].content.map((line, lineIdx) => (
                                        <div key={lineIdx} className={`text-base leading-relaxed ${line === '' ? 'h-2' : 'text-gray-700'
                                            }`}>
                                            {line && <TextRenderer text={line} />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Slide Navigation */}
                            <div className="flex justify-between items-center mt-6">
                                <button
                                    onClick={handlePrevSlide}
                                    disabled={currentSlide === 0}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all
                    ${currentSlide === 0
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-indigo-300 hover:shadow-md'}`}
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    Trước
                                </button>

                                <span className="text-sm font-medium text-gray-400">
                                    {currentSlide + 1} / {selectedLesson.slides.length}
                                </span>

                                <button
                                    onClick={handleNextSlide}
                                    disabled={currentSlide === selectedLesson.slides.length - 1}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all
                    ${currentSlide === selectedLesson.slides.length - 1
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'}`}
                                >
                                    Tiếp
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonViewer;
