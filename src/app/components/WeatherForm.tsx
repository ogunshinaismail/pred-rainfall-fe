import React, { useState } from 'react';

interface WeatherFormProps {
  onSubmit: (features: number[]) => void;
  loading: boolean;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSubmit, loading }) => {
  const [features, setFeatures] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const cloudySkies = [2.5, 0, 0, 0, 100, 0, 0, 0, 0, 0]
  const lightRainfall = [2.5, 0, 0, 0, 75, 0, 0, 0, 0, 0]
//   const [features, setFeatures] = useState<number[]>([3.994446, 48, 11139, 3.35, 6.65, 1.554695, 48, 21, 7, 2]);
// Cloudy skies ====================== [2.5, 0, 0, 0, 100, 0, 0, 0, 0, 0]
// Light rainfall ================== [2.5, 0, 0, 0, 75, 0, 0, 0, 0, 0]

const labelArr = ['randomError', 'randomError_cnt', 'date',	'lon',	'lat',	'precipitation',	'precipitation_cnt', 'precipitation_cnt_cond', 'MWprecipitation', 'MWprecipitation_cnt', 'MWprecipitation_cnt_cond']



  const handleInputChange = (index: number, value: string) => {
    const updatedFeatures = [...features];
  updatedFeatures[index] = Number(value);
    setFeatures(updatedFeatures);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericFeatures = features.map(Number);
    onSubmit(numericFeatures);
  };

  const handleTestFeat = (features: number[]) => {
    const numericFeatures = features.map(Number);
    onSubmit(numericFeatures);
  }

  return (
    <section id="form" className="bg-gray-100/70 py-16">
      <div className="w-11/12 mx-auto text-black">
        <h2 className="text-3xl font-bold mb-9 mb:mb-6 text-center text-black">Predict Rainfall</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mx-auto grid md:grid-cols-2 items-center gap-7">
            {features.map((value, index) => (
                <div key={index} className="flex flex-col gap-2 m-0" style={{margin: 0}}>
                    <label htmlFor={`input-${index}`} className='capitalize'>
                        {labelArr[index]}:
                    </label>
                    <input
                        type="number"
                        id={`input-${index}`}
                        value={value}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        className="border border-gray-300 bg-transparent rounded-lg outline-none px-4 py-2 w-full remove-arrow"
                        disabled={loading}
                    />
                </div>
            ))}
          <button
            type="submit"
            className="bg-gray-800 text-white py-3 font-medium rounded-lg hover:bg-gray-900 transition col-span-2"
          >
            {loading ? "loading....." : "Predict Weather"}
          </button>

            <div className="col-span-2 flex flex-col items-center mt-20">
                <p className="text-xl my-3">Test to get what other results looks like</p>
                <div className="mt-3 flex gap-3 w-full">
                    <p className="w-full px-3 text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 cursor-pointer transition" onClick={() => handleTestFeat(cloudySkies)}>
                        {loading ? "loading....." : 'For Cloudy skies ahead'}
                    </p>
                    <p className="w-full px-3 text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 cursor-pointer transition" onClick={() => handleTestFeat(lightRainfall)}>
                        {loading ? "loading....." : "For Light rainfall expected"}
                    </p>
                </div>
            </div>
        </form>
      </div>
    </section>
  );
};

export default WeatherForm;