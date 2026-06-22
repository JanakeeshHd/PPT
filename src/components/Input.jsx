export default function Input({
  label,
  className = '',
  icon: Icon,
  error,
  ...props
}) {
  const baseClasses = 'w-full px-4 py-3 rounded-xl border border-dark-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 bg-white';
  
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="text-sm font-medium text-dark-700">{label}</label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
        )}
        <input
          className={`${baseClasses} ${Icon ? 'pl-11' : ''} ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
