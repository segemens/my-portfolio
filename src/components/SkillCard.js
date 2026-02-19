import React from 'react';

function SkillCard({ name, description, level }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>

        <p className="mt-2">
          <strong>Seviye:</strong>{' '}
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              {index < level ? '⭐' : '☆'}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
