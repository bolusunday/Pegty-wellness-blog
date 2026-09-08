"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Send, User } from "lucide-react";

export default function Comments({ slug }) {
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const storageKey = `comments_${slug}`;

  useEffect(() => {
    if (!slug) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load comments", e);
      }
    }
  }, [slug, storageKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !author.trim()) return;

    const newComment = {
      id: Date.now(),
      author: author.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setText("");
  };

  return (
    <div className="mt-16 pt-10 border-t border-charcoal/15">
      <div className="flex items-center gap-2 mb-8">
        <MessageSquare className="w-5 h-5 text-sage" />
        <h3 className="text-2xl font-serif font-bold text-charcoal">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:outline-none focus:border-sage text-sm bg-white"
          />
        </div>
        <textarea
          rows={3}
          placeholder="Leave a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl border border-charcoal/15 focus:outline-none focus:border-sage text-sm bg-white resize-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-sage text-white rounded-full font-medium text-sm hover:bg-terracotta transition-colors"
        >
          <Send className="w-4 h-4" /> Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-sm text-charcoal/60 italic">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-charcoal/10 space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-sage/20 flex items-center justify-center text-sage">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm text-charcoal">
                    {item.author}
                  </span>
                </div>
                <span className="text-xs text-charcoal/50">{item.date}</span>
              </div>
              <p className="text-sm text-charcoal/80 pl-9 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
