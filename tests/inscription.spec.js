test('affiche le formulaire d\'inscription', () => {
    const { getByLabelText, getByText } = render(<Inscription />);
  
    expect(getByLabelText(/nom/i)).toBeInTheDocument();
    expect(getByLabelText(/prenom/i)).toBeInTheDocument();
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/tel/i)).toBeInTheDocument();
    expect(getByLabelText(/date de naissance/i)).toBeInTheDocument();
    expect(getByText(/s'inscrire/i)).toBeInTheDocument();
  });
  
  test('met à jour l\'état des champs de formulaire lors de la saisie', () => {
    const { getByLabelText } = render(<Inscription />);
  
    const nomInput = getByLabelText(/nom/i);
    fireEvent.change(nomInput, { target: { value: 'Doe' } });
    expect(nomInput.value).toBe('Doe');
  
    const prenomInput = getByLabelText(/prenom/i);
    fireEvent.change(prenomInput, { target: { value: 'John' } });
    expect(prenomInput.value).toBe('John');
  
    const emailInput = getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    expect(emailInput.value).toBe('john.doe@example.com');
  
    const telInput = getByLabelText(/tel/i);
    fireEvent.change(telInput, { target: { value: '1234567890' } });
    expect(telInput.value).toBe('1234567890');
  
    const birthdateInput = getByLabelText(/date de naissance/i);
    fireEvent.change(birthdateInput, { target: { value: '2000-01-01' } });
    expect(birthdateInput.value).toBe('2000-01-01');
  });
  
  test('soumet le formulaire', () => {
    const handleSubmit = jest.fn();
    const { getByText } = render(<Inscription onSubmit={handleSubmit} />);
  
    const submitButton = getByText(/s'inscrire/i);
    fireEvent.click(submitButton);
  
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  })