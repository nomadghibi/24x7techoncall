const MapComponent = () => {
  const mapUrl =
    'https://www.google.com/maps?q=602+Hurst+Rd+NE+Palm+Bay+FL+32907&output=embed';

  return (
    <iframe
      title="24/7 Tech On Call Location"
      src={mapUrl}
      style={{ width: '100%', height: '400px', border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
};

export default MapComponent;
