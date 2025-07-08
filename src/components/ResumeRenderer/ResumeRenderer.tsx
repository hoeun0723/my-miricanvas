import { RESUME_DATA } from '../../constants/resumeData';
import styles from './ResumeRenderer.module.css';

const ResumeRenderer = () => {
  const { name, summary, contact, projects, experiences } = RESUME_DATA;

  return (
    <div className={styles.resume}>
      <section className={styles.header}>
        <h1 className="color-anchor-text">{name}</h1>
        <p>{summary}</p>
        <div className={styles.links}>
          <a href={`mailto:${contact.email}`}>📧 Email</a>
          <a href={contact.github}>💻 GitHub</a>
          <a href={contact.blog}>📝 Blog</a>
          <a href={contact.youtube}>📺 Youtube</a>
        </div>
      </section>

      <section className={styles.projects}>
        <h2 className="color-anchor-text">Projects</h2>
        {projects.map((project) => (
          <div key={project.name} className={styles.project}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectMeta}>{project.date} · {project.role}</p>
            <p className={styles.projectDesc}>{project.description}</p>
            <p className={styles.projectStack}>
              <strong>🛠 Tech Stack:</strong> {project.techStack.join(', ')}
            </p>

            {/* 학습 내용 */}
            {project.learned.map((learning, idx) => (
              <div key={idx} className={styles.learningSection}>
                <h4 className={styles.learningTitle}>📌 {learning.title}</h4>
                {learning.details.map((detail, i) => (
                  <div key={i} className={styles.detailBlock}>
                    <p className={styles.detailTitle}>✔ {detail.title}</p>
                    <ul className={styles.detailContents}>
                      {detail.contents.map((content, j) => (
                        <li key={j}>{content}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p className={styles.result}><strong>📈 Result:</strong> {learning.result}</p>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className={styles.experiences}>
        <h2 className="color-anchor-text">Experience</h2>

        <div className={styles.experienceBlock}>
          <h4>🏆 수상 경력</h4>
          <ul>
            {experiences.awards.map((award, idx) => (
              <li key={idx}>{award}</li>
            ))}
          </ul>
        </div>

        <div className={styles.experienceBlock}>
          <h4>🎓 교육 이수</h4>
          <ul>
            {experiences.education.map((edu, idx) => (
              <li key={idx}>{edu}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumeRenderer;
