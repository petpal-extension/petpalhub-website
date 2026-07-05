export default function PawTrail({ count = 5 }: { count?: number }) {
  return (
    <div className="paw-trail my-2" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="text-royal-500">
          <ellipse cx="12" cy="16" rx="6" ry="5" />
          <ellipse cx="5" cy="8" rx="2.2" ry="3" />
          <ellipse cx="10.5" cy="4.5" rx="2.2" ry="3" />
          <ellipse cx="15.5" cy="4.5" rx="2.2" ry="3" />
          <ellipse cx="19" cy="8" rx="2.2" ry="3" />
        </svg>
      ))}
    </div>
  );
}
