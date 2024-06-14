// App.tsx

import React, { useState } from 'react';
import { ScrollView, View, Text, Button, TextInput } from 'react-native';
import { FichaAvaliacao, Quesito, fichasAvaliacao } from './models/FichaAvaliacao';
import FichaAvaliacaoList from './components/FichaAvaliacaoList';

const App: React.FC = () => {
  const [fichas, setFichas] = useState<FichaAvaliacao[]>(fichasAvaliacao);
  const [editingFicha, setEditingFicha] = useState<FichaAvaliacao | null>(null);
  const [nomeFicha, setNomeFicha] = useState<string>('');

  const handleEdit = (ficha: FichaAvaliacao) => {
    setEditingFicha(ficha);
    setNomeFicha(ficha.nome);
    // Aqui você pode definir o estado para outros campos da ficha de avaliação se necessário
  };

  const handleDelete = (id: number) => {
    const updatedFichas = fichas.filter((ficha) => ficha.id !== id);
    setFichas(updatedFichas);
    setEditingFicha(null); // Limpar estado de edição se estiver editando a ficha excluída
  };

  const handleSave = () => {
    if (editingFicha) {
      const updatedFichas = fichas.map((f) =>
        f.id === editingFicha.id ? { ...f, nome: nomeFicha } : f
      );
      setFichas(updatedFichas);
      setEditingFicha(null);
    } else {
      const newFicha: FichaAvaliacao = {
        id: Date.now(),
        nome: nomeFicha,
        data: new Date(),
        quesitos: [], // Defina os quesitos conforme necessário
        valorTotal: 0, // Defina o valor total conforme necessário
      };
      setFichas([...fichas, newFicha]);
    }
    setNomeFicha('');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={{ fontSize: 24, color: 'black', marginBottom: 20 }}>Fichas de Avaliação</Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
          placeholder="Nome da Ficha"
          value={nomeFicha}
          onChangeText={setNomeFicha}
        />

        <Button
          title={editingFicha ? 'Salvar Edição' : 'Adicionar Ficha'}
          onPress={handleSave}
          disabled={!nomeFicha}
        />

        <FichaAvaliacaoList fichas={fichas} onEdit={handleEdit} onDelete={handleDelete} />
      </ScrollView>
    </View>
  );
};

export default App;
