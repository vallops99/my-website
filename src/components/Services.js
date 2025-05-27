import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Backend Architecture',
      description: 'Resilient, Modular & High-Performance Architecture.',
      subtitle: 'Build robust systems with clean logic, optimized for speed, scalability, and security.',
      features: [
        'Modular, layered architecture ensuring maintainability',
        'Efficient API and database interaction patterns',
        'Input validation, encryption, and auth protocols',
        'Optimized queries, caching, and async processes'
      ]
    },
    {
      icon: '🚀',
      title: 'DevOps & Infrastructure',
      description: 'Automated, Scalable & CI/CD Pipelines.',
      subtitle: 'Streamlining infrastructure and workflows to support seamless development.',
      features: [
        'Infrastructure as Code with Serverless/Terraform',
        'Automated testing, build, and deployment pipelines',
        'Comprehensive logging, alerting, and metrics tracking',
        'Cloud-native tools and container orchestration'
      ]
    },
    {
      icon: '🔒',
      title: 'Security & Performance',
      description: 'Secure & Reliable Systems.',
      subtitle: 'Prioritizing data protection, authentication, and fault tolerance.',
      features: [
        'Advanced security protocols and encryption',
        'Performance optimization and load balancing',
        'Fault tolerance and disaster recovery planning',
        'Scalable architecture for growing demands'
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>What I Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p><strong>{service.description}</strong></p>
              <p>{service.subtitle}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 