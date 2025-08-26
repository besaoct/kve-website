"use client";

interface Specifications {
  inputsOutputs: string[];
  dimensions: string;
  weight: string;
  connections: string[];
}

interface ProductSpecificationsProps {
  specifications: Specifications;
}

export default function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  return (
    <div className="space-y-8">
      {/* Machine Inputs & Outputs */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Machine Inputs & Outputs</h3>
        <div className="rounded-lg overflow-hidden">
          <table className="w-fit text-gray-600 border">
            <thead className="w-full">
              <tr className="bg-gray-100 w-full">
                <th className="text-left p-3 font-medium">Parameter</th>
                <th className="text-left p-3 font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Phase 1: Input Voltage #1 (Voltage/Phase/Hertz)</td>
                <td className="p-3">120/1/60</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Phase 1: Rated Output #1A (Current/Voltage/Duty Cycle)</td>
                <td className="p-3">MIG 95A/18.8V/60% 75A/17.8V/100%</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Phase 1: Input Current at Max Rated Output #1 (Current)</td>
                <td className="p-3">20A</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Phase 1: Input Voltage #2 (Voltage/Phase/Hertz)</td>
                <td className="p-3">230/1/60</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Phase 1: Rated Output #2A (Current/Voltage/Duty Cycle)</td>
                <td className="p-3">MIG 175A/22.8V/30% 90A/18.6V/100%</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Phase 1: Input Current at Max Rated Output #2 (Current)</td>
                <td className="p-3">22.5A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Weights & Dimensions */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Product Weights & Dimensions</h3>
        <div className="rounded-lg overflow-hidden">
          <table className="w-fit text-gray-600 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 font-medium">Parameter</th>
                <th className="text-left p-3 font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Dimensions (H x W x D)</td>
                <td className="p-3">{specifications.dimensions}</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Net Weight</td>
                <td className="p-3">{specifications.weight}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Machine Technologies & Connections */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Machine Technologies & Connections</h3>
        <div className="rounded-lg overflow-x-auto w-full">
          <table className="w-fit text-gray-600 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 font-medium">Parameter</th>
                <th className="text-left p-3 font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {specifications.connections.map((connection, index) => {
                const [key, value] = connection.split(":");
                return (
                  <tr className="border-t" key={index}>
                    <td className="p-3">{key}</td>
                    <td className="p-3">{value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
