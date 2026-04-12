# Internal Linking Map - SatUsPhere SEO Pages

**33 programmatic SEO pages** at `satusphere.com/learn/*`

---

## Current State Summary

- **All 33 pages** link to the Bitcoin From Scratch course (Teachable checkout CTA) - good
- **12 pages** have a Related Topics section with at least 1 internal link
- **21 pages** have NO internal links to other SEO pages - critical gap
- **2 broken links** on `what-is-bitcoin` (`/learn/how-does-bitcoin-work` and `/learn/what-is-blockchain` do not exist)

---

## Topic Clusters (Hub-and-Spoke Structure)

Pages are organized into 5 clusters. Each cluster has one hub page. All cluster hubs link to each other via the main `/learn` index.

### Cluster 1: Bitcoin Fundamentals
**Hub:** `what-is-bitcoin`

| Page | Slug |
|------|------|
| What Is Bitcoin? | `what-is-bitcoin` |
| Who Created Bitcoin? | `who-created-bitcoin` |
| What Is the Bitcoin Whitepaper? | `what-is-the-bitcoin-whitepaper` |
| What Is the Bitcoin Genesis Block? | `what-is-the-bitcoin-genesis-block` |
| How Many Bitcoins Are There? | `how-many-bitcoins-are-there` |
| What Is a Satoshi? | `what-is-a-satoshi` |
| Bitcoin vs. Blockchain | `bitcoin-vs-blockchain` |
| What Is Bitcoin Dominance? | `what-is-bitcoin-dominance` |

### Cluster 2: Blockchain & Transactions
**Hub:** `how-does-blockchain-work`

| Page | Slug |
|------|------|
| How Does Blockchain Work? | `how-does-blockchain-work` |
| How Do Bitcoin Transactions Work? | `how-do-bitcoin-transactions-work` |
| What Is a UTXO? | `what-is-a-utxo` |
| What Is a Mempool? | `what-is-a-mempool` |
| What Is SegWit? | `what-is-segwit` |
| What Is On-Chain vs. Off-Chain? | `what-is-on-chain-vs-off-chain` |
| What Is a Bitcoin Address? | `what-is-a-bitcoin-address` |

### Cluster 3: Mining & Consensus
**Hub:** `what-is-bitcoin-mining`

| Page | Slug |
|------|------|
| What Is Bitcoin Mining? | `what-is-bitcoin-mining` |
| What Is Proof of Work? | `what-is-proof-of-work` |
| How Does Bitcoin Mining Difficulty Work? | `how-does-bitcoin-mining-difficulty-work` |
| What Is a Block Reward? | `what-is-a-block-reward` |
| What Is Bitcoin Halving? | `what-is-bitcoin-halving` |
| What Is Byzantine Fault Tolerance? | `what-is-byzantine-fault-tolerance` |
| What Is a 51% Attack? | `what-is-a-51-percent-attack` |
| Can Bitcoin Be Hacked? | `can-bitcoin-be-hacked` |

### Cluster 4: Wallets & Security
**Hub:** `what-is-a-bitcoin-wallet`

| Page | Slug |
|------|------|
| What Is a Bitcoin Wallet? | `what-is-a-bitcoin-wallet` |
| What Is a Private Key? | `what-is-a-private-key` |
| What Is a Seed Phrase? | `what-is-a-seed-phrase` |
| What Is a Hardware Wallet? | `what-is-a-hardware-wallet` |
| What Is Self-Custody? | `what-is-self-custody` |
| What Is Multisig? | `what-is-multisig` |

### Cluster 5: Network & Layer 2
**Hub:** `what-is-the-lightning-network`

| Page | Slug |
|------|------|
| What Is the Lightning Network? | `what-is-the-lightning-network` |
| What Is a Bitcoin Node? | `what-is-a-bitcoin-node` |
| What Is Bitcoin Layer 2? | `what-is-bitcoin-layer-2` |
| What Is On-Chain vs. Off-Chain? | `what-is-on-chain-vs-off-chain` |
| What Is a Bitcoin Fork? | `what-is-a-bitcoin-fork` |

> Note: `what-is-on-chain-vs-off-chain` and `what-is-a-bitcoin-address` appear in two clusters each.

---

## Crawl Depth from Homepage

| Depth | Pages |
|-------|-------|
| 0 | `satusphere.com` (homepage) |
| 1 | `satusphere.com/learn` (hub index) |
| 2 | Cluster hubs: `what-is-bitcoin`, `how-does-blockchain-work`, `what-is-bitcoin-mining`, `what-is-a-bitcoin-wallet`, `what-is-the-lightning-network` |
| 3 | All other cluster member pages (28 pages) |

All 33 pages should be reachable at depth 2-3 once the `/learn` hub properly links to all cluster hubs.

---

## Internal Links Per Page

Format: **Source page** - links OUT to these pages (anchor text in quotes)

All links should use the format: `/learn/{slug}`

All pages already link to the course via Teachable checkout CTA - not repeated below.

---

### CLUSTER 1: Bitcoin Fundamentals

**`what-is-bitcoin`** (Hub) - links to:
- `/learn/who-created-bitcoin` - "Who created Bitcoin?"
- `/learn/what-is-the-bitcoin-whitepaper` - "What is the Bitcoin whitepaper?"
- `/learn/how-does-blockchain-work` - "How does the blockchain work?" *(FIX: current link `/learn/what-is-blockchain` is broken)*
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-a-bitcoin-wallet` - "What is a Bitcoin wallet?"
- `/learn/what-is-self-custody` - "What is self-custody?"
- `/learn/what-is-the-lightning-network` - "What is the Lightning Network?"
> Note: also remove broken link `/learn/how-does-bitcoin-work`

**`who-created-bitcoin`** - links to:
- `/learn/what-is-bitcoin` - "What is Bitcoin?"
- `/learn/what-is-the-bitcoin-whitepaper` - "What is the Bitcoin whitepaper?"
- `/learn/what-is-the-bitcoin-genesis-block` - "What is the genesis block?"
- `/learn/how-many-bitcoins-are-there` - "How many Bitcoins exist?"

**`what-is-the-bitcoin-whitepaper`** - links to:
- `/learn/who-created-bitcoin` - "Who created Bitcoin?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/what-is-the-bitcoin-genesis-block` - "What is the genesis block?"

**`what-is-the-bitcoin-genesis-block`** - links to:
- `/learn/who-created-bitcoin` - "Who created Bitcoin?"
- `/learn/what-is-the-bitcoin-whitepaper` - "What is the Bitcoin whitepaper?"
- `/learn/how-does-blockchain-work` - "How does the blockchain work?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`how-many-bitcoins-are-there`** - links to:
- `/learn/what-is-bitcoin-halving` - "What is the Bitcoin halving?"
- `/learn/what-is-a-block-reward` - "What is a block reward?"
- `/learn/what-is-a-satoshi` - "What is a satoshi?"
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-a-satoshi`** - links to:
- `/learn/what-is-bitcoin` - "What is Bitcoin?"
- `/learn/how-many-bitcoins-are-there` - "How many Bitcoins are there?"
- `/learn/what-is-bitcoin-halving` - "What is the Bitcoin halving?"
- `/learn/what-is-a-bitcoin-address` - "What is a Bitcoin address?"

**`bitcoin-vs-blockchain`** - links to:
- `/learn/what-is-bitcoin` - "What is Bitcoin?"
- `/learn/how-does-blockchain-work` - "How does blockchain work?"
- `/learn/what-is-bitcoin-mining` - "Who maintains the blockchain?"
- `/learn/what-is-a-bitcoin-node` - "What is a Bitcoin node?"

**`what-is-bitcoin-dominance`** - links to:
- `/learn/what-is-bitcoin` - "What is Bitcoin?"
- `/learn/what-is-a-bitcoin-fork` - "What is a Bitcoin fork?"
- `/learn/what-is-bitcoin-halving` - "What is the Bitcoin halving?"
- `/learn/how-many-bitcoins-are-there` - "How many Bitcoins exist?"

---

### CLUSTER 2: Blockchain & Transactions

**`how-does-blockchain-work`** (Hub) - links to: *(existing links - confirm correct)*
- `/learn/what-is-bitcoin` - "What is Bitcoin?"
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/what-is-a-utxo` - "What is a UTXO?"
- `/learn/how-do-bitcoin-transactions-work` - "How do Bitcoin transactions work?"
- `/learn/what-is-a-bitcoin-node` - "What is a Bitcoin node?"

**`how-do-bitcoin-transactions-work`** - links to:
- `/learn/how-does-blockchain-work` - "How does the blockchain work?"
- `/learn/what-is-a-utxo` - "What is a UTXO?"
- `/learn/what-is-a-mempool` - "What is the mempool?"
- `/learn/what-is-a-bitcoin-address` - "What is a Bitcoin address?"
- `/learn/what-is-segwit` - "What is SegWit?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-a-utxo`** - links to: *(existing links - confirm correct)*
- `/learn/how-does-blockchain-work` - "How does blockchain work?"
- `/learn/how-do-bitcoin-transactions-work` - "How do Bitcoin transactions work?"
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-a-bitcoin-node` - "What is a Bitcoin node?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-a-mempool`** - links to:
- `/learn/how-do-bitcoin-transactions-work` - "How do Bitcoin transactions work?"
- `/learn/how-does-blockchain-work` - "How does blockchain work?"
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-a-utxo` - "What is a UTXO?"
- `/learn/what-is-segwit` - "What is SegWit?"

**`what-is-segwit`** - links to:
- `/learn/how-do-bitcoin-transactions-work` - "How do Bitcoin transactions work?"
- `/learn/what-is-a-utxo` - "What is a UTXO?"
- `/learn/how-does-blockchain-work` - "How does blockchain work?"
- `/learn/what-is-a-bitcoin-fork` - "What is a Bitcoin fork?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-on-chain-vs-off-chain`** - links to:
- `/learn/how-do-bitcoin-transactions-work` - "How do Bitcoin transactions work?"
- `/learn/what-is-the-lightning-network` - "What is the Lightning Network?"
- `/learn/what-is-bitcoin-layer-2` - "What is Bitcoin Layer 2?"
- `/learn/how-does-blockchain-work` - "How does blockchain work?"
- `/learn/what-is-a-mempool` - "What is the mempool?"

**`what-is-a-bitcoin-address`** - links to:
- `/learn/what-is-a-bitcoin-wallet` - "What is a Bitcoin wallet?"
- `/learn/what-is-a-private-key` - "What is a private key?"
- `/learn/how-do-bitcoin-transactions-work` - "How do Bitcoin transactions work?"
- `/learn/what-is-self-custody` - "What is self-custody?"
- `/learn/what-is-a-seed-phrase` - "What is a seed phrase?"

---

### CLUSTER 3: Mining & Consensus

**`what-is-bitcoin-mining`** (Hub) - links to: *(existing links - confirm correct)*
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/what-is-bitcoin-halving` - "What is the Bitcoin halving?"
- `/learn/how-does-blockchain-work` - "How does blockchain work?"
- `/learn/what-is-a-bitcoin-node` - "What is a Bitcoin node?"
- `/learn/what-is-a-51-percent-attack` - "What is a 51% attack?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-proof-of-work`** - links to: *(existing links - confirm correct)*
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/how-does-blockchain-work` - "How does blockchain work?"
- `/learn/what-is-bitcoin-halving` - "What is the Bitcoin halving?"
- `/learn/what-is-a-51-percent-attack` - "What is a 51% attack?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`how-does-bitcoin-mining-difficulty-work`** - links to:
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/what-is-bitcoin-halving` - "What is the halving?"
- `/learn/what-is-a-block-reward` - "What is a block reward?"
- `/learn/what-is-byzantine-fault-tolerance` - "What is Byzantine fault tolerance?"

**`what-is-a-block-reward`** - links to:
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-bitcoin-halving` - "What is the Bitcoin halving?"
- `/learn/how-many-bitcoins-are-there` - "How many Bitcoins exist?"
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-bitcoin-halving`** - links to: *(existing links - confirm correct)*
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"
- `/learn/how-many-bitcoins-are-there` - "How many Bitcoins will ever exist?"
- `/learn/what-is-a-block-reward` - "What is a block reward?"

**`what-is-byzantine-fault-tolerance`** - links to:
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-a-51-percent-attack` - "What is a 51% attack?"
- `/learn/can-bitcoin-be-hacked` - "Can Bitcoin be hacked?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-a-51-percent-attack`** - links to:
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/can-bitcoin-be-hacked` - "Can Bitcoin be hacked?"
- `/learn/what-is-a-bitcoin-node` - "What is a Bitcoin node?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`can-bitcoin-be-hacked`** - links to:
- `/learn/what-is-a-51-percent-attack` - "What is a 51% attack?"
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/what-is-self-custody` - "What is self-custody?"
- `/learn/what-is-a-private-key` - "What is a private key?"

---

### CLUSTER 4: Wallets & Security

**`what-is-a-bitcoin-wallet`** (Hub) - links to: *(existing links - confirm correct)*
- `/learn/what-is-a-private-key` - "What is a private key?"
- `/learn/what-is-self-custody` - "What is self-custody?"
- `/learn/what-is-a-seed-phrase` - "What is a seed phrase?"
- `/learn/what-is-a-hardware-wallet` - "What is a hardware wallet?"
- `/learn/how-do-bitcoin-transactions-work` - "How do Bitcoin transactions work?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-a-private-key`** - links to: *(existing links - confirm correct)*
- `/learn/what-is-a-bitcoin-wallet` - "What is a Bitcoin wallet?"
- `/learn/what-is-self-custody` - "What is self-custody?"
- `/learn/what-is-a-seed-phrase` - "What is a seed phrase?"
- `/learn/what-is-a-hardware-wallet` - "What is a hardware wallet?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-a-seed-phrase`** - links to: *(existing links - confirm correct)*
- `/learn/what-is-a-private-key` - "What is a private key?"
- `/learn/what-is-a-bitcoin-wallet` - "What is a Bitcoin wallet?"
- `/learn/what-is-a-hardware-wallet` - "What is a hardware wallet?"
- `/learn/what-is-self-custody` - "What is self-custody?"
- `/learn/what-is-a-bitcoin-address` - "What is a Bitcoin address?"

**`what-is-a-hardware-wallet`** - links to:
- `/learn/what-is-a-bitcoin-wallet` - "What is a Bitcoin wallet?"
- `/learn/what-is-a-private-key` - "What is a private key?"
- `/learn/what-is-a-seed-phrase` - "What is a seed phrase?"
- `/learn/what-is-self-custody` - "What is self-custody?"
- `/learn/what-is-multisig` - "What is multisig?"

**`what-is-self-custody`** - links to: *(existing links - confirm correct)*
- `/learn/what-is-a-private-key` - "What is a private key?"
- `/learn/what-is-a-seed-phrase` - "What is a seed phrase?"
- `/learn/what-is-a-hardware-wallet` - "What is a hardware wallet?"
- `/learn/what-is-a-bitcoin-wallet` - "What is a Bitcoin wallet?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-multisig`** - links to:
- `/learn/what-is-a-bitcoin-wallet` - "What is a Bitcoin wallet?"
- `/learn/what-is-a-private-key` - "What is a private key?"
- `/learn/what-is-self-custody` - "What is self-custody?"
- `/learn/what-is-a-hardware-wallet` - "What is a hardware wallet?"
- `/learn/can-bitcoin-be-hacked` - "Can Bitcoin be hacked?"

---

### CLUSTER 5: Network & Layer 2

**`what-is-the-lightning-network`** (Hub) - links to: *(existing links - confirm correct)*
- `/learn/what-is-bitcoin` - "What is Bitcoin?"
- `/learn/how-do-bitcoin-transactions-work` - "How do Bitcoin transactions work?"
- `/learn/what-is-bitcoin-layer-2` - "What is Bitcoin Layer 2?"
- `/learn/what-is-on-chain-vs-off-chain` - "What is on-chain vs. off-chain?"
- `/learn/what-is-a-bitcoin-wallet` - "What is a Bitcoin wallet?"

**`what-is-a-bitcoin-node`** - links to: *(existing links - confirm correct)*
- `/learn/what-is-bitcoin-mining` - "What is Bitcoin mining?"
- `/learn/how-does-blockchain-work` - "How does blockchain work?"
- `/learn/what-is-a-utxo` - "What is a UTXO?"
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"

**`what-is-bitcoin-layer-2`** - links to:
- `/learn/what-is-the-lightning-network` - "What is the Lightning Network?"
- `/learn/what-is-on-chain-vs-off-chain` - "What is on-chain vs. off-chain?"
- `/learn/how-do-bitcoin-transactions-work` - "How do Bitcoin transactions work?"
- `/learn/what-is-bitcoin` - "What is Bitcoin?"
- `/learn/what-is-a-bitcoin-wallet` - "How to store Bitcoin"

**`what-is-a-bitcoin-fork`** - links to:
- `/learn/what-is-bitcoin` - "What is Bitcoin?"
- `/learn/how-does-blockchain-work` - "How does blockchain work?"
- `/learn/what-is-proof-of-work` - "What is proof of work?"
- `/learn/what-is-a-bitcoin-node` - "What is a Bitcoin node?"
- `/learn/what-is-segwit` - "What is SegWit?"

---

## Pages That Link to the Course

All 33 pages include a CTA button linking to the Bitcoin From Scratch course on Teachable:
`https://checkout.teachable.com/secure/2684007/checkout/order_1y3wjzbk`

This appears in two places per page: mid-article CTA block and footer CTA section.

---

## Action Items (Implementation)

### Priority 1 - Fix broken links on existing pages
| Page | Fix |
|------|-----|
| `what-is-bitcoin` | Replace `/learn/how-does-bitcoin-work` with `/learn/how-do-bitcoin-transactions-work` |
| `what-is-bitcoin` | Replace `/learn/what-is-blockchain` with `/learn/how-does-blockchain-work` |

### Priority 2 - Add Related Topics to 21 pages missing all links
Pages needing a complete Related Topics section added:
`bitcoin-vs-blockchain`, `can-bitcoin-be-hacked`, `how-do-bitcoin-transactions-work`, `how-does-bitcoin-mining-difficulty-work`, `how-many-bitcoins-are-there`, `what-is-a-51-percent-attack`, `what-is-a-bitcoin-address`, `what-is-a-bitcoin-fork`, `what-is-a-block-reward`, `what-is-a-hardware-wallet`, `what-is-a-mempool`, `what-is-a-satoshi`, `what-is-bitcoin-dominance`, `what-is-bitcoin-layer-2`, `what-is-byzantine-fault-tolerance`, `what-is-multisig`, `what-is-on-chain-vs-off-chain`, `what-is-segwit`, `what-is-the-bitcoin-genesis-block`, `what-is-the-bitcoin-whitepaper`, `who-created-bitcoin`

### Priority 3 - Verify existing Related Topics use correct slugs
Pages with existing Related Topics sections - verify all slugs match actual files:
`how-does-blockchain-work`, `what-is-a-bitcoin-node`, `what-is-a-bitcoin-wallet`, `what-is-a-private-key`, `what-is-a-seed-phrase`, `what-is-a-utxo`, `what-is-bitcoin-halving`, `what-is-bitcoin-mining`, `what-is-bitcoin` (after fix), `what-is-proof-of-work`, `what-is-self-custody`, `what-is-the-lightning-network`

---

## Slug Reference (All 33 Pages)

All pages live at `satusphere.com/learn/{slug}` and file at `seo-pages/{slug}.html`

```
bitcoin-vs-blockchain
can-bitcoin-be-hacked
how-do-bitcoin-transactions-work
how-does-bitcoin-mining-difficulty-work
how-does-blockchain-work
how-many-bitcoins-are-there
what-is-a-51-percent-attack
what-is-a-bitcoin-address
what-is-a-bitcoin-fork
what-is-a-bitcoin-node
what-is-a-bitcoin-wallet
what-is-a-block-reward
what-is-a-hardware-wallet
what-is-a-mempool
what-is-a-private-key
what-is-a-satoshi
what-is-a-seed-phrase
what-is-a-utxo
what-is-bitcoin
what-is-bitcoin-dominance
what-is-bitcoin-halving
what-is-bitcoin-layer-2
what-is-bitcoin-mining
what-is-byzantine-fault-tolerance
what-is-multisig
what-is-on-chain-vs-off-chain
what-is-proof-of-work
what-is-segwit
what-is-self-custody
what-is-the-bitcoin-genesis-block
what-is-the-bitcoin-whitepaper
what-is-the-lightning-network
who-created-bitcoin
```
