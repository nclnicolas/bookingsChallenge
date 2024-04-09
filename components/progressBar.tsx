import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = ( { progress }: { progress: number } ) => {
    return <ProgressBar variant="success" now={ progress } />;
}

export default Progress