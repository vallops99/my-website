import React from 'react';
import { ReactComponent as Python } from '../icons/python.svg';
import { ReactComponent as FastAPI } from '../icons/fastapi.svg';
import { ReactComponent as Django } from '../icons/django.svg';
import { ReactComponent as Postgres } from '../icons/postgresql.svg';
import { ReactComponent as Redis } from '../icons/redis.svg';
import { ReactComponent as Docker } from '../icons/docker.svg';
import { ReactComponent as AWS } from '../icons/aws.svg';
import { ReactComponent as GRPC } from '../icons/grpc.svg';

const TechStack = () => {
  const technologies = [
    { name: 'Python', icon: <Python /> },
    { name: 'FastAPI', icon: <FastAPI /> },
    { name: 'Django', icon: <Django /> },
    { name: 'PostgreSQL', icon: <Postgres /> },
    { name: 'Redis', icon: <Redis /> },
    { name: 'Docker', icon: <Docker /> },
    { name: 'AWS', icon: <AWS /> },
    { name: 'gRPC', icon: <GRPC /> },
    { name: 'REST', icon: '🔗' }
  ];

  return (
    <section className="tech-stack">
      <div className="container">
        <h2>Current Favorite Tech Stack</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ fontStyle: 'italic', color: '#667eea', fontSize: '1.2rem' }}>
            "It takes <strong>two</strong> devs to change a <strong>light bulb</strong>."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 