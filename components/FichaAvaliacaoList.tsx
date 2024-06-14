// components/FichaAvaliacaoList.tsx

import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { FichaAvaliacao } from '../models/FichaAvaliacao';

interface Props {
    fichas: FichaAvaliacao[];
    onEdit: (ficha: FichaAvaliacao) => void;
    onDelete: (id: number) => void;
}

const FichaAvaliacaoList: React.FC<Props> = ({ fichas, onEdit, onDelete }) => {
    const renderItem = ({ item }: { item: FichaAvaliacao }) => (
        <View style={{ marginBottom: 10 }}>
            <Text>{item.nome}</Text>
            <Button title="Editar" onPress={() => onEdit(item)} />
            <Button title="Excluir" onPress={() => onDelete(item.id)} />
        </View>
    );

    return (
        <FlatList
            data={fichas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default FichaAvaliacaoList;
