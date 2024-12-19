const { addItem, findItem } = require('../index');
const Item = require('../models/item');

jest.mock('../models/item');

describe('addItem', () => {
    it('should add an item successfully', async () => {
        const itemData = { title: 'Test Item', description: 'Test Description', start_price: '100', reserve_price: '150' };
        Item.create.mockResolvedValue(itemData);

        const result = await addItem(itemData);
        expect(Item.create).toHaveBeenCalledWith(itemData);
        expect(result).toEqual(itemData);
    });

    it('should handle errors when adding an item', async () => {
        const itemData = { title: 'Test Item', description: 'Test Description', start_price: '100', reserve_price: '150' };
        const errorMessage = 'Error adding item';
        Item.create.mockRejectedValue(new Error(errorMessage));

        await expect(addItem(itemData)).rejects.toThrow(errorMessage);
    });
});

describe('findItem', () => {
    it('should find items successfully', async () => {
        const itemData = [{ title: 'Test Item', description: 'Test Description' }];
        Item.find.mockResolvedValue(itemData);

        const result = await findItem('Test');
        expect(Item.find).toHaveBeenCalled();
        expect(result).toEqual(itemData);
    });

    it('should return an empty array if no items are found', async () => {
        Item.find.mockResolvedValue([]);

        const result = await findItem('Non-existent Item');
        expect(Item.find).toHaveBeenCalled();
        expect(result).toEqual([]);
    });
});

