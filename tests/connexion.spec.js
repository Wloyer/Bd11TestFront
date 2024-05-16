test('affiche le formulaire de connexion', () => {
    const { getByLabelText, getByText } = render(<Connexion />);
  
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/mot de passe/i)).toBeInTheDocument();
    expect(getByText(/se connecter/i)).toBeInTheDocument();
  });

  test('soumet le formulaire', () => {
    const mockOnSubmit = jest.fn();
    const { getByText } = render(<Connexion onLogin={mockOnSubmit} />);
    const submitButton = getByText(/se connecter/i);
  
    fireEvent.click(submitButton); 
  })

  expect(mockOnSubmit).toHaveBeenCalledTimes(1);