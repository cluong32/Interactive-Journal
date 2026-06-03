import Sidebar from '../components/Sidebar';

function Home() {
    return (
        <div className="app-layout">
            <Sidebar />

            <main className="main-content">
                <h1>Home</h1>
                <input placeholder="Entry Title"/>
                <textarea placeholder="Write your journal..." rows="14" />
                <button>Save Entry</button>
            </main>
        </div>
    );
}

export default Home;