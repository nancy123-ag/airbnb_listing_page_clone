import React, { useState } from 'react';
import { X, Check, Plus } from 'lucide-react';
import { Wishlist } from '../../types';

interface SaveWishlistModalProps {
  wishlists: Wishlist[];
  onClose: () => void;
  onToggleWishlist: (id: string) => void;
  onCreateWishlist: (name: string) => void;
}

export const SaveWishlistModal: React.FC<SaveWishlistModalProps> = ({
  wishlists,
  onClose,
  onToggleWishlist,
  onCreateWishlist
}) => {
  const [showCreateInput, setShowCreateInput] = useState(false);
  const [newListName, setNewListName] = useState('');

  const handleCreate = () => {
    if (!newListName.trim()) return;
    onCreateWishlist(newListName.trim());
    setNewListName('');
    setShowCreateInput(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl relative animate-fade-in">
        
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <h3 className="font-extrabold text-lg text-gray-900">Save to wishlist</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition">
            <X size={18} />
          </button>
        </div>

        {/* Wishlists Selector List */}
        <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
          {wishlists.map((w) => (
            <div 
              key={w.id} 
              onClick={() => onToggleWishlist(w.id)}
              className="flex items-center justify-between p-3.5 rounded-2xl border border-gray-200 hover:border-black cursor-pointer transition bg-white hover:bg-gray-50"
            >
              <div>
                <h4 className="font-bold text-sm text-gray-900">{w.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{w.count} saved items</p>
              </div>
              <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition ${w.saved ? 'bg-[#FF385C] border-[#FF385C] text-white' : 'border-gray-400'}`}>
                {w.saved && <Check size={14} strokeWidth={3} />}
              </div>
            </div>
          ))}
        </div>

        {/* Create New Wishlist Action */}
        {!showCreateInput ? (
          <button 
            onClick={() => setShowCreateInput(true)}
            className="w-full py-3 border border-dashed border-gray-400 rounded-2xl text-xs font-bold text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-50 transition cursor-pointer"
          >
            <Plus size={16} /> Create new wishlist
          </button>
        ) : (
          <div className="flex gap-2 pt-1">
            <input 
              type="text" 
              placeholder="Wishlist name..."
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              className="flex-1 px-3.5 py-2.5 border border-gray-300 rounded-xl text-xs focus:outline-none focus:border-black font-medium"
            />
            <button 
              onClick={handleCreate}
              className="bg-black text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-800 transition cursor-pointer"
            >
              Create
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
