import React, { useRef, useEffect } from 'react';

interface TextRendererProps {
    text: string;
    className?: string;
}

/**
 * Converts basic markdown-like syntax to HTML for rendering in chat bubbles and quiz text.
 * Handles: bold, italic, headers, bullet points, line breaks.
 */
function formatTextToHtml(text: string): string {
    if (!text) return '';

    // Split by lines
    const lines = text.split('\n');
    const htmlLines: string[] = [];

    for (const line of lines) {
        let processed = line;

        // Headers: ## text → <strong>text</strong>
        processed = processed.replace(/^###\s+(.+)$/, '<strong style="font-size:1em;">$1</strong>');
        processed = processed.replace(/^##\s+(.+)$/, '<strong style="font-size:1.05em;">$1</strong>');

        // Bold: **text** → <strong>text</strong>
        processed = processed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

        // Italic: *text* → <em>text</em> (but not if it's bold **)
        processed = processed.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');

        // Bullet points: - text → styled bullet
        processed = processed.replace(/^[-•]\s+(.+)$/, '<span style="display:flex;gap:6px;align-items:baseline;"><span style="color:#6366f1;">•</span><span>$1</span></span>');

        htmlLines.push(processed);
    }

    // Join with <br> for line breaks
    return htmlLines.join('<br/>');
}

const TextRenderer: React.FC<TextRendererProps> = ({ text, className = '' }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        containerRef.current.innerHTML = formatTextToHtml(text);
    }, [text]);

    return (
        <div
            ref={containerRef}
            className={`text-renderer ${className}`}
            style={{ lineHeight: 1.7, wordBreak: 'break-word' }}
        />
    );
};

export default TextRenderer;
