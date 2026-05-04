import { useState } from 'react'
import './App.css'

export default function App() {
    const [selectedSkills, setSelectedSkills] = useState(['Java', 'HTML', 'Python', 'Agile', '.NET Framework'])

    const toggleSkill = (skill) => {
        setSelectedSkills(prev => 
            prev.includes(skill) 
                ? prev.filter(s => s !== skill) 
                : [...prev, skill]
        )
    }

    const skills = ['Java', 'HTML', 'JavaScript', 'Python', 'C#', 'React', '.NET Framework', 'SQL', 'Git', 'Agile', 'Go', 'Java Swing', 'Docker', 'CSS']

    return (
        <div style={{
            fontFamily: "'DM Sans', sans-serif",
            maxWidth: 1000,
            margin: '0 auto',
            padding: '4rem 2rem',
            color: '#1e293b',
            minHeight: '100vh'
        }}>

            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f8fafc; color: #1e293b; }
        a { text-decoration: none; transition: color 0.2s; }
        a:hover { color: #2563eb; }
        @media (max-width: 768px) {
            .main-container { grid-template-columns: 1fr !important; gap: 2rem !important; }
            aside { position: static !important; }
            h1 { font-size: 42px !important; }
        }
      `}</style>

            <div className="main-container" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) 260px',
                gap: '3rem',
                alignItems: 'start'
            }}>
                {/* Main Content */}
                <main>
                    {/* Header */}
                    <header style={{ paddingBottom: '2.5rem', borderBottom: '1px solid #e2e8f0' }}>
                        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 56, fontWeight: 400, lineHeight: 1.05, letterSpacing: -1, marginBottom: 8 }}>
                            Brandon <em style={{ fontStyle: 'italic', color: '#2563eb' }}>Clements</em>
                        </h1>
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, color: '#64748b', letterSpacing: '0.04em' }}>Software Engineer</p>
                    </header>

                    {/* About */}
                    <section style={{ padding: '2.5rem 0', borderBottom: '1px solid #e2e8f0' }}>
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 20 }}>About</p>
                        <p style={{ fontSize: 17, lineHeight: 1.8, fontWeight: 300, color: '#334155' }}>
                            Engineer with <strong style={{ fontWeight: 600, color: '#0f172a' }}>4 years</strong> of
                            experience building full-stack systems and developing user interfaces. I care deeply about
                            creating clean abstractions and projects that are well documented and easily maintainable.
                            Currently interested in working with people and creating a smooth and secure user experience.
                        </p>
                    </section>

                    {/* Experience */}
                    <section style={{ padding: '2.5rem 0' }}>
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 24 }}>Experience</p>
                        {[
                            {
                                role: 'Software Engineer', company: 'Integrated Solutions For Systems', date: '2024 — 2026', location: 'Auburn, AL', bullets: [
                                    'Member of an engineering team responsible for developing and maintaining Web applications and Windows applications for Department of Defense clients.',
                                    'Work directly with clients to translate requirements into features and guide long-term development direction.',
                                ]
                            },
                            {
                                role: 'Junior Full-Stack Developer', company: 'ThreadKore', date: '2023 — 2024', location: 'Opelika, AL', bullets: [
                                    'Developed new features for a large construction management and sales platform, enhancing functionality and user experience.',
                                    'Maintained and updated existing software modules ensuring they remain efficient and aligned with evolving customer needs.',
                                ]
                            },
                            {
                                role: 'Student Full-Stack Developer', company: 'Auburn University', date: '2021 — 2023', location: 'Auburn, AL', bullets: [
                                    'Developed and launched new applications for clients within Auburn University to support various organizational needs across campus.',
                                    'Maintained and improved existing applications by implementing new features and adjusting for evolving use cases.',
                                    'Provided ongoing technical support for clients, addressing any issues that came up and assisting clients to make the most of our products.',
                                ]
                            },
                        ].map(exp => (
                            <div key={exp.company} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, marginBottom: 32 }}>
                                <div>
                                    <p style={{ fontSize: 16, fontWeight: 600, color: '#0f172a' }}>{exp.role}</p>
                                    <p style={{ fontSize: 14, color: '#2563eb', fontWeight: 500, marginTop: 2 }}>{exp.company}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#64748b' }}>{exp.date}</p>
                                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#94a3b8', marginTop: 2 }}>{exp.location}</p>
                                </div>
                                <div style={{ gridColumn: '1/-1', marginTop: 12 }}>
                                    {exp.bullets.map(b => (
                                        <p key={b} style={{ fontSize: 14.5, lineHeight: 1.7, color: '#475569', paddingLeft: 18, position: 'relative', marginBottom: 8, fontWeight: 300, textAlign: 'left' }}>
                                            <span style={{ position: 'absolute', left: 0, color: '#2563eb', fontWeight: 500 }}>→</span>{b}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </main>

                {/* Sidebar */}
                <aside style={{ position: 'sticky', top: '2.5rem' }}>
                    {/* Contact */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 16 }}>Contact</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {[
                                { label: 'LinkedIn', value: 'LinkedIn', url: 'https://www.linkedin.com/in/brandon-clements-519785211/' },
                                { label: 'GitHub', value: 'GitHub', url: 'https://github.com/clementsb' },
                                { label: 'Location', value: 'Auburn, AL' }
                            ].map(item => (
                                <div key={item.label}>
                                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#94a3b8', textTransform: 'uppercase' }}>{item.label}</p>
                                    {item.url ? (
                                        <a 
                                            href={item.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ 
                                                fontSize: 13, 
                                                color: '#2563eb', 
                                                marginTop: 2, 
                                                display: 'inline-block',
                                                fontWeight: 500,
                                                borderBottom: '1px solid transparent'
                                            }}
                                            onMouseOver={(e) => e.target.style.borderBottomColor = '#2563eb'}
                                            onMouseOut={(e) => e.target.style.borderBottomColor = 'transparent'}
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p style={{ fontSize: 13, color: '#334155', marginTop: 2 }}>{item.value}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div style={{ marginBottom: '2.5rem' }}>
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 16 }}>Skills</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                            {skills.map((skill) => {
                                const isSelected = selectedSkills.includes(skill);
                                return (
                                    <button 
                                        key={skill} 
                                        onClick={() => toggleSkill(skill)}
                                        style={{
                                            fontFamily: "'DM Mono', monospace",
                                            fontSize: 10.5,
                                            padding: '4px 10px',
                                            background: isSelected ? '#eff6ff' : '#fff',
                                            border: isSelected ? '1px solid #bfdbfe' : '1px solid #e2e8f0',
                                            borderRadius: 4,
                                            color: isSelected ? '#2563eb' : '#64748b',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {skill}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 16 }}>Education</p>
                        <p style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>B.S. Software Engineering</p>
                        <p style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>Auburn University</p>
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#94a3b8', marginTop: 2 }}>Class of 2023</p>
                    </div>
                </aside>
            </div>

        </div>
    )
}