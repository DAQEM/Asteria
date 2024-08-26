import hljs from "highlight.js";
import MarkdownIt from "markdown-it";

export const createMarkdownRenderer = (options = {}) => {
    const md: MarkdownIt = new MarkdownIt({
        html: true,
        linkify: true,
        breaks: false,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return (
                        '<pre><code class="hljs">' +
                        hljs.highlight(str, {
                            language: lang,
                            ignoreIllegals: true,
                        }).value +
                        "</code></pre>"
                    );
                } catch (__) {}
            }

            return (
                '<pre><code class="hljs">' +
                md.utils.escapeHtml(str) +
                "</code></pre>"
            );
        },
        ...options,
    });

    md.linkify.set({ fuzzyEmail: false });

    return md;
};

export const renderMarkdownString = (input: string) =>
    createMarkdownRenderer().render(input);
