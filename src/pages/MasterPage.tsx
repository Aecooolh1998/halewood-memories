import Navbar from '../components/nav-bar/Navbar';
import './MasterPage.css'

interface MasterPageProps {
    children: React.ReactNode;
}
  
  const MasterPage: React.FC<MasterPageProps> = ({ children }) => {
  return (
    <div className="master-page-container">
      <Navbar />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default MasterPage;
