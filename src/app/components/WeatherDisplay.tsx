import Image from 'next/image';
import React from 'react';

interface WeatherDisplayProps {
  prediction: number | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ prediction }) => {
  const getWeatherImage = () => {
    if (prediction === null) return "/images/sunny.png"; // Default
    if (prediction < 0.5) return "/images/cloudy.png";
    if (prediction < 1) return "/images/rainy.png";
    return "/images/stormy.png";
  };

  const getWeatherDescription = () => {
    if (prediction === null) return "Please input the parameters needed to predict the weather.";
    if (prediction < 0.5) return "Cloudy skies ahead.";
    if (prediction < 1) return "Light rainfall expected.";
    return "Severe weather predicted!";
  };

  return (
    <section className="bg-gray-100/90 h-full py-12 text-black">
      <div className="w-10/12 mx-auto text-center flex flex-col my-10 md:mt-24">
        <Image
          src={getWeatherImage()}
          alt="Weather Condition"
          className="mx-auto w-32 h-32"
          width={100}
          height={100}
        />
        <h3 className="text-2xl font-bold mt-4">
          {getWeatherDescription()}
        </h3>
        {prediction !== null && (
          <p className="text-gray-600 mt-2">
            Predicted value: {prediction.toFixed(2)} mm/day
          </p>
        )}
      </div>
    </section>
  );
};

export default WeatherDisplay;