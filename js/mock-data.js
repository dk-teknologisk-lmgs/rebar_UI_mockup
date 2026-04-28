/* Mock data — global object accessible from any page.
   Edit freely to test different scenarios. */

window.MOCK_DATA = {
  currentUser: { name: 'Lylian Goes' },

  projects: [
    {
      id: 'prj_sonderborg',
      name: 'Sønderborg Multihus',
      client: 'NCC',
      address: 'Havnegade 12, 6400 Sønderborg',
      contact: 'Jens Hansen · jens@ncc.dk',
      notes: 'Pilot site — testing Y12/100 main reinforcement on floor 2 columns.',
      locations: [
        {
          id: 'loc_floor2_east',
          name: 'Floor 2 — East Wall',
          updated: 'today',
          controlPoints: [
            {
              id: 'cp_ca01', name: 'CA-01', sessionCount: 12,
              polygon: { x: 0.15, y: 0.15, w: 0.20, h: 0.18 },
              color: '#2c8a8a',
              requirements: [{
                type: 'main_reinforcement',
                params: {
                  horizontal: { diameter_mm: 12, spacing_mm: 100, tolerance_diam_mm: 1, tolerance_spacing_mm: 10 },
                  vertical:   { diameter_mm: 10, spacing_mm: 150, tolerance_diam_mm: 1, tolerance_spacing_mm: 15 },
                  cover_mm: 25, tolerance_cover_mm: 5
                }
              }],
              sessions: []
            },
            {
              id: 'cp_ca02', name: 'CA-02', sessionCount: 8,
              polygon: { x: 0.42, y: 0.25, w: 0.22, h: 0.20 },
              color: '#9572b3',
              requirements: [],
              sessions: []
            },
            {
              id: 'cp_ca03', name: 'CA-03', sessionCount: 4,
              polygon: { x: 0.28, y: 0.55, w: 0.30, h: 0.25 },
              color: '#e89039',
              requirements: [{
                type: 'main_reinforcement',
                params: {
                  horizontal: { diameter_mm: 12, spacing_mm: 100, tolerance_diam_mm: 1, tolerance_spacing_mm: 10 },
                  vertical:   { diameter_mm: 10, spacing_mm: 150, tolerance_diam_mm: 1, tolerance_spacing_mm: 15 },
                  cover_mm: 25, tolerance_cover_mm: 5
                }
              }],
              sessions: [
                { id: 's1', name: 'Beam B-12', date: '22 Apr 14:03', images: 3, recordings: 1, status: 'pass', annotated: true },
                { id: 's2', name: 'Beam B-12', date: '22 Apr 11:25', images: 2, recordings: 0, status: null,    annotated: true },
                { id: 's3', name: 'Area-wide', date: '21 Apr 16:10', images: 4, recordings: 1, status: 'fail', annotated: true },
                { id: 's4', name: 'Beam B-13', date: '21 Apr 09:30', images: 3, recordings: 0, status: 'pass', annotated: true }
              ]
            }
          ]
        },
        { id: 'loc_floor2_west', name: 'Floor 2 — West Wall', updated: '2d ago', controlPoints: [] },
        { id: 'loc_roof',        name: 'Roof',                updated: '1w ago', controlPoints: [] }
      ]
    }
  ]
};

/** Helper: format requirements for display */
window.formatRequirement = function(req) {
  if (req.type !== 'main_reinforcement') return null;
  const p = req.params;
  return {
    typeLabel: 'Main reinforcement',
    rows: [
      ['Horizontal:', `ø${p.horizontal.diameter_mm} / ${p.horizontal.spacing_mm} mm  (±${p.horizontal.tolerance_diam_mm} / ±${p.horizontal.tolerance_spacing_mm})`],
      ['Vertical:',   `ø${p.vertical.diameter_mm} / ${p.vertical.spacing_mm} mm  (±${p.vertical.tolerance_diam_mm} / ±${p.vertical.tolerance_spacing_mm})`],
      ['Dæklag:',     `${p.cover_mm} mm  (±${p.tolerance_cover_mm})`]
    ]
  };
};
