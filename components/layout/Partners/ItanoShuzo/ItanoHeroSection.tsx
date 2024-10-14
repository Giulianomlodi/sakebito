const ItanoHeroSection = () => {
    return (
        <section className="hero flex flex-col items-center justify-center h-[90vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/images/Pages/Itano-Shuzo/Hero.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <h1 className="text-5xl font-bold mb-2 relative z-10">Itano-Shuzo</h1>
            <h2 className="text-lg relative z-10">Proud brewery of Ashimori in Okayama</h2>
        </section>
    );
};

export default ItanoHeroSection;