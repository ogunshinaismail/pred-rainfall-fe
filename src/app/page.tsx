"use client"
import { useState } from 'react';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import Footer from './components/Footer';

const Home: React.FC = () => {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const BASE_URL = 'https://pred-rainfall-be.onrender.com'

  const handlePrediction = async (features: number[]) => {
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features }),
      });
      const data = await response.json();
      setPrediction(data.prediction);
      setLoading(false)
    } catch (error) {
      console.error("Error making prediction:", error);
      setLoading(false)
    }
  };

  return (
    <div>
      <Header />
      <main className="grid md:grid-cols-3">
        <div className="md:col-span-2">
          <WeatherForm onSubmit={handlePrediction} loading={loading} />
        </div>
        <div className="md:col-span-1">
          <WeatherDisplay prediction={prediction} />
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;