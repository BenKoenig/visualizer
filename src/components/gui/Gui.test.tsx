import { render, screen } from '@testing-library/react'
import Gui from './Gui'

describe('Gui', () => {
  it('renders title and subtitle', () => {
    const projectName = 'Visualizer';
    const projectVersion = '1.0.0';
    const extendBtnText = 'Extend';
    const closeBtnText = 'Close';
    render(<Gui projectName={projectName} projectVersion={projectVersion} extendBtnText={extendBtnText} closeBtnText={closeBtnText} />);

    expect(screen.getByText(projectName)).toBeInTheDocument();
    expect(screen.getByText(projectVersion)).toBeInTheDocument();
    expect(screen.getByText(extendBtnText)).toBeInTheDocument();
    expect(screen.getByText(closeBtnText)).toBeInTheDocument();
  });
});