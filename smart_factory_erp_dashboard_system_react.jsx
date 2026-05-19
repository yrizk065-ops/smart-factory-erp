export default function SmartFactoryERPDashboard() {
  const departments = [
    {
      name: 'Plant Manager',
      kpis: [
        ['Daily Production', '1,250,000 Bottles'],
        ['OEE', '91%'],
        ['Downtime', '1.8 hrs'],
        ['Factory Efficiency', '94%'],
      ],
    },
    {
      name: 'Production Manager',
      kpis: [
        ['Plan vs Actual', '97%'],
        ['Waste %', '1.9%'],
        ['Line Utilization', '92%'],
        ['Shift Efficiency', '95%'],
      ],
    },
    {
      name: 'Maintenance Manager',
      kpis: [
        ['MTBF', '185 hrs'],
        ['MTTR', '22 mins'],
        ['PM Compliance', '98%'],
        ['Open Work Orders', '4'],
      ],
    },
    {
      name: 'Quality Manager',
      kpis: [
        ['Batch Approval', '99.2%'],
        ['Open NCR', '3'],
        ['CAPA Closed', '96%'],
        ['GMP Compliance', '99%'],
      ],
    },
    {
      name: 'Finance Manager',
      kpis: [
        ['Revenue', '$4.2M'],
        ['Gross Profit', '31%'],
        ['Cash Flow', 'Positive'],
        ['Budget Variance', '2.5%'],
      ],
    },
    {
      name: 'Sales Manager',
      kpis: [
        ['Monthly Sales', '$5.1M'],
        ['Collection Rate', '93%'],
        ['Forecast Accuracy', '95%'],
        ['Distribution Coverage', '88%'],
      ],
    },
    {
      name: 'Shareholder Dashboard',
      kpis: [
        ['Revenue Growth', '18%'],
        ['EBITDA Margin', '24%'],
        ['ROI', '21%'],
        ['Factory Utilization', '93%'],
      ],
    },
  ];

  const plannedVsActual = [
    ['Production', '1,200,000', '1,165,000', '97%'],
    ['Sales', '$5M', '$4.8M', '96%'],
    ['Maintenance', '120 Tasks', '116 Tasks', '97%'],
    ['Quality', '99%', '98.6%', '99%'],
    ['Procurement', '98%', '95%', '97%'],
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mb-8 rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-800">
          Smart Factory ERP Dashboard
        </h1>
        <p className="mt-2 text-slate-500">
          Integrated Bottled Water Manufacturing Control Center
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-sm font-semibold text-slate-500">Total Production</h2>
          <div className="mt-4 text-3xl font-bold">1.25M</div>
          <p className="mt-2 text-sm text-green-600">+8% vs last month</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-sm font-semibold text-slate-500">Factory OEE</h2>
          <div className="mt-4 text-3xl font-bold">91%</div>
          <p className="mt-2 text-sm text-green-600">Target Achieved</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-sm font-semibold text-slate-500">Open NCR</h2>
          <div className="mt-4 text-3xl font-bold">3</div>
          <p className="mt-2 text-sm text-yellow-600">Under Investigation</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-sm font-semibold text-slate-500">Revenue</h2>
          <div className="mt-4 text-3xl font-bold">$5.1M</div>
          <p className="mt-2 text-sm text-green-600">+12% Growth</p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">
            Planned vs Actual Performance
          </h2>
          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium">
            Live ERP Data
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-2xl">
            <thead>
              <tr className="bg-slate-200 text-left text-sm uppercase tracking-wide text-slate-700">
                <th className="p-4">Department</th>
                <th className="p-4">Planned</th>
                <th className="p-4">Actual</th>
                <th className="p-4">Achievement</th>
              </tr>
            </thead>
            <tbody>
              {plannedVsActual.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 bg-white hover:bg-slate-50">
                  {row.map((cell, cidx) => (
                    <td key={cidx} className="p-4 text-sm font-medium text-slate-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {departments.map((dept, idx) => (
          <div key={idx} className="rounded-3xl bg-white p-6 shadow-xl transition hover:scale-[1.01]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">{dept.name}</h2>
              <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Active
              </div>
            </div>

            <div className="space-y-4">
              {dept.kpis.map((kpi, kidx) => (
                <div
                  key={kidx}
                  className="flex items-center justify-between rounded-2xl bg-slate-100 p-4"
                >
                  <span className="text-sm font-medium text-slate-600">{kpi[0]}</span>
                  <span className="text-lg font-bold text-slate-800">{kpi[1]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            ERP Alerts Center
          </h2>

          <div className="space-y-4">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
              <div className="font-semibold text-red-700">Machine Downtime Alert</div>
              <div className="mt-1 text-sm text-red-600">
                Blow Molding Line 2 stopped for 18 minutes.
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
              <div className="font-semibold text-yellow-700">Low Raw Material</div>
              <div className="mt-1 text-sm text-yellow-600">
                Cap inventory below safety stock.
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <div className="font-semibold text-blue-700">Quality Approval Pending</div>
              <div className="mt-1 text-sm text-blue-600">
                Batch QA-2026-145 waiting laboratory release.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            Executive Summary
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-slate-100 p-5">
              <div className="text-sm text-slate-500">Factory Efficiency</div>
              <div className="mt-2 text-3xl font-bold">94%</div>
            </div>

            <div className="rounded-2xl bg-slate-100 p-5">
              <div className="text-sm text-slate-500">Production Waste</div>
              <div className="mt-2 text-3xl font-bold">1.9%</div>
            </div>

            <div className="rounded-2xl bg-slate-100 p-5">
              <div className="text-sm text-slate-500">On-Time Delivery</div>
              <div className="mt-2 text-3xl font-bold">96%</div>
            </div>

            <div className="rounded-2xl bg-slate-100 p-5">
              <div className="text-sm text-slate-500">Inventory Accuracy</div>
              <div className="mt-2 text-3xl font-bold">99%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
