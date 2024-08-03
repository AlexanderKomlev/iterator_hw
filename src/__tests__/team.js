import Team from '../team';
import Character from '../character';

test('team test', () => {
  const teamA = new Team();
  teamA.members.push([
    new Character('John', 'Zombie'),
    new Character('Frank', 'Magician'),
    new Character('Mike', 'Undead'),
  ]);

  const data = [...teamA];
  expect(data).toEqual([
    [
      {
        name: 'John', type: 'Zombie', health: 100, level: 1, attack: undefined, defence: undefined,
      },
      {
        name: 'Frank', type: 'Magician', health: 100, level: 1, attack: undefined, defence: undefined,
      },
      {
        name: 'Mike', type: 'Undead', health: 100, level: 1, attack: undefined, defence: undefined,
      },
    ],
  ]);
});
