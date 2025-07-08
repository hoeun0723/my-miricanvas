import { RESUME_DATA } from '../../constants/resumeData';
import { useCanvasContext } from '../../context/CanvasContext/CanvasContext';
import styles from './ResumeRenderer.module.css';

const ResumeRenderer = () => {
  const { name,image, summary, contact } = RESUME_DATA;
  const { selectedProjects, showAwards, showEducation,selectedColor,selectedText,profileImage } = useCanvasContext();
  const { awards, education } = RESUME_DATA.experiences;


  const visibleProjects = selectedProjects.slice(0, 2);
  const placeholdersCount = 2 - visibleProjects.length;

 


  return (
    <div className={styles.resume} style={{
      '--color-primary': `var(${selectedColor})`,
      '--color-anchor-text': `var(${selectedColor})`,
    } as React.CSSProperties}>
        <div className={styles.twoColumnLayout}>
        <div className={styles.leftColumn}>
          <div className={styles.profileSection}>
            <img src={profileImage || image} alt="Profile" className={styles.profileImage} />
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <div className={styles.links}>
              <a href={`mailto:${contact.email}`}>📧 Email</a>
              {contact.github && <a href={contact.github}>💻 GitHub</a>}
              {contact.blog && <a href={contact.blog}>📝 Blog</a>}
              {contact.youtube && <a href={contact.youtube}>📺 Youtube</a>}
            </div>
          </section>


          {showEducation && education.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>교육 이력</h2>
              <ul className={styles.infoList}>
                {education.map((edu, idx) => (
                  <li key={idx}>{edu}</li>
                ))}
              </ul>
            </section>
          )}

          
          {showAwards && awards.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>수상 경력</h2>
              <ul className={styles.infoList}>
                {awards.map((award, idx) => (
                  <li key={idx}>{award}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

          <div className={styles.rightColumn}>
          <section className={styles.header}>
            <h1 className={styles.mainTitle}><span className={styles.mainTitleHighlight}>{selectedText}</span><br/>{name} 입니다</h1>
            {summary && <p className={styles.summary}>{summary}</p>}
          </section>

      <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            {visibleProjects.length === 0 && (
              <p className={styles.noProjectMsg}>프로젝트를 선택해주세요.</p>
            )}
            {visibleProjects.map((project) => (
              <div key={project.name} className={styles.project}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectMeta}>{project.date} · {project.role}</p>
                <p className={styles.projectDesc}>{project.description}</p>
                <p className={styles.projectStack}>
                  <strong>🛠 Tech Stack:</strong> {project.techStack.join(', ')}
                </p>
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
            {Array.from({ length: placeholdersCount }).map((_, idx) => (
              <div key={`placeholder-${idx}`} className={styles.projectPlaceholder}>
                <p>프로젝트를 선택해주세요</p>
              </div>
            ))}
          </section>

      
    </div>
      </div>
    </div>
  );
};

export default ResumeRenderer;
