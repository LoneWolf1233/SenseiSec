export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-6 gradient-text">Ποιοι είμαστε</h1>
      <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 prose prose-invert max-w-none">
        <p>
          Γεια σας και καλώς ήρθατε στην SenseiSec. 
        </p>
        <h2>Τι θα βρείτε εδώ</h2>
        <ul>
          <li>Ειδήσεις</li>
          <li>Εργαλεία σχεδιασμένα από εμάς</li>
          <li>Έρευνες σχετικά με ευπάθειες</li>
        </ul>
      </div>
    </main>
  )
}




