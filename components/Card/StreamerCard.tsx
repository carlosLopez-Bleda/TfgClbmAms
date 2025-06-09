'use client';

import React from 'react';

interface Props {
  name: string;
  username: string;
  platform: string;
  image: string;
  followers: string;
  description: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const StreamerCard: React.FC<Props> = ({
  name,
  username,
  platform,
  image,
  followers,
  description,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '1rem',
        padding: '1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'transform 0.2s',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1rem',
        }}
      />
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p style={{ color: '#888', margin: '0.25rem 0' }}>{`@${username}`}</p>
      <p style={{ color: '#444', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{description}</p>
      <span
        style={{
          background: '#f3f3f3',
          padding: '0.3rem 0.7rem',
          borderRadius: '1rem',
          fontSize: '0.75rem',
          marginBottom: '1rem',
        }}
      >
        {platform} • {followers}
      </span>
      <button
        onClick={onToggleFavorite}
        style={{
          border: 'none',
          background: isFavorite ? '#f87171' : '#ddd',
          color: '#fff',
          borderRadius: '20px',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        {isFavorite ? '❤️ Favorito' : '🤍 Añadir'}
      </button>
    </div>
  );
};

export default StreamerCard;
