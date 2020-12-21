import { render, screen } from '@testing-library/react';
import mapboxgl from 'mapbox-gl';
import App from './App';
import 'mapbox-gl/dist/mapbox-gl.css'


describe("testing Map app", () => {

  test('renders without crashing', () => {
    render(<App />);
    const headerElement = screen.getByText(/map app/i);
    expect(headerElement).toBeInTheDocument();
  })

  test('renders Map', () => {
    render(<App />);
    // let map = mapboxgl.Map
    expect(mapboxgl.Map).toHaveBeenCalledTimes(1)
  });

});