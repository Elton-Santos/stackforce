import { useTranslation } from 'react-i18next';
import '/src/styles/footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <p className="footerText">{t('motto')}: <b>Stackforce</b> - {t('slogan')}.</p>
            <p><b>&copy; {t('copyright')} | 2024</b></p>
        </footer>
    );
};

export default Footer;