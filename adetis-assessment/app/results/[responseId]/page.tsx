import ResultsClient from './resultsClient';

export default function ResultsPage({ params }: { params: { responseId: string } }) {
  return <ResultsClient responseId={params.responseId} />;
}
