# 适应容器

```ts
import Plot, { PlotParams } from 'react-plotly.js';

const UmapWrap = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  --bs-aspect-ratio: 80%;
  &::before {
    display: block;
    padding-top: var(--bs-aspect-ratio);
    content: '';
  }
  > * {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const umapLayout: PlotParams['layout'] = {
  hovermode: 'closest',
  legend: {
    itemsizing: 'constant',
    itemclick: false,
    itemdoubleclick: false,
  },
  margin: {
    l: 40,
    r: 40,
    b: 40,
    t: 50,
    pad: 4,
  },
  xaxis: {
    type: 'linear',
    range: [-15.398421351504826, 8.558421351504826],
    autorange: true,
  },
  yaxis: {
    type: 'linear',
    range: [-21.03968616262482, 10.199686162624822],
    autorange: true,
  },
  autosize: true,
};

function UMAP() {
  const mockData: any = useMockData();
  return (
    <UmapWrap>
      <Plot
        divId="umap"
        style={{ width: '100%', height: '100%' }}
        data={mockData ?? []}
        layout={umapLayout}
        useResizeHandler={true}
      />
    </UmapWrap>
  );
}
```