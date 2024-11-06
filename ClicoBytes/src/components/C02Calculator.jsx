import { useState } from 'react'

export default function CO2Calculator() {
  const [distance, setDistance] = useState('')
  const [co2Saved, setCo2Saved] = useState(null)

  const calculateCO2 = () => {
    // Usando a média de 96g de CO2/km mencionada
    const co2PerKm = 0.096 // 96g = 0.096kg
    const saved = (parseFloat(distance) * co2PerKm).toFixed(2)
    setCo2Saved(saved)
  }

  return (
    <section id="calculadora" className="bg-bg py-24">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    
          <div className="bg-primary rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Utilize nossa calculadora de impacto ambiental
            </h3>
            
            <div className="space-y-6">
              <p className="leading-relaxed">
                Considerando os menores valores de emissão de cada carro, 
                a média é de 96 g de CO2/km. Portanto, na média, cada um dos 10 carros mais 
                vendidos do Brasil emite 0,096 kg de CO2 a cada km rodado.
              </p>

              <p className="leading-relaxed">
                Portanto, após um pequeno trajeto de 20 quilômetros percorridos, 
                é liberado cerca de 2kg de CO2 na atmosfera.
              </p>
            </div>
          </div>

    
          <div className="bg-neutral rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-primary font-semibold mb-2 text-2xl">
                  Distância Percorrida
                </label>
                <div className="flex gap-4">
                  <input
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                    placeholder="0"
                  />
                  <span className="flex items-center text-gray-600 font-medium">
                    KM
                  </span>
                </div>
              </div>

              <button
                onClick={calculateCO2}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold 
                          hover:bg-secondary transition-colors duration-300"
              >
                CALCULAR
              </button>

              {co2Saved !== null && (
                <div className="mt-8 text-center">
                  <p className="text-primary font-medium mb-2 text-2xl">
                    Andando essa distância de bicicleta você salva a atmosfera de receber:
                  </p>
                  <p className="text-4xl font-bold text-secondary">
                    {co2Saved} kg de CO<sub>2</sub>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}