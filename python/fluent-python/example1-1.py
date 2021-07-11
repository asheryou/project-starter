# 了解特殊方法的作用 如 __getitem__

import collections

Card = collections.namedtuple('Card',['rank','suit'])

class FrenchDeck:
    ranks = [str(n) for n in range(2,11)] + list('JQKA')
    suits = 'spades diamonds clubs hearts'.split()

    def __init__(self):
        # self._cards = [Card(rank,suit) for suit in self.suits
        # for rank in self.ranks]
        self._cards = [Card(rank,suit) for rank in self.ranks for suit in self.suits]

    def __len__(self):
        return len(self._cards)

    # 实现了__getitem__方法后就是 可迭代 的了
    def __getitem__(self,position):
        return self._cards[position]

# Text
deck = FrenchDeck()
print(len(deck))
print(deck[0])
print(deck[-1])

from random import choice
print("############# 随机抽卡 ###############")
print(choice(deck))
print(choice(deck))
print("############## 遍历 ##############")
for card in deck:
    print(card)
print("############ 反向遍历 ###############")
for card in reversed(deck):
    print(card)