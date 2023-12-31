import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleText: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleText }) => {
  return (
    <div className={styles.container}>{sampleText}</div>
  );
};

export default BaseTemplate;