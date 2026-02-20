// Card size presets (in mm)
const CARD_SIZES = {
    poker: { width: 63.5, height: 88.9 },          // Poker/TCG (2.5" × 3.5")
    bridge: { width: 57, height: 89 },             // Bridge (2.25" × 3.5")
    'mini-euro': { width: 44, height: 68 },        // Mini European
    'standard-euro': { width: 59, height: 92 },    // Standard European
    tarot: { width: 70, height: 120 },             // Tarot (2.75" × 4.75")
    'square-small': { width: 70, height: 70 },     // Small Square
    'square-large': { width: 88, height: 88 },     // Large Square
    jumbo: { width: 89, height: 146 },             // Jumbo (3.5" × 5.75")
    custom: { width: 63.5, height: 88.9 }          // Custom
};

// Application state
const state = {
    cardSize: 'poker',
    customWidth: 63.5,
    customHeight: 88.9,
    selectedSets: ['base', 'senseis-path', 'wind-move', 'wind-spirit', 'promo'],
    blackAndWhite: false,
    inkSaving: false,
    printBacks: false,
    compactHeaders: false,
    noGaps: false,
    noHeaders: false
};

// LocalStorage key
const STORAGE_KEY = 'onitama-card-generator-state';

// Save state to localStorage
function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save state to localStorage:', e);
    }
}

// Load state from localStorage
function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            // Merge saved state with defaults
            Object.assign(state, parsed);
        }
    } catch (e) {
        console.error('Failed to load state from localStorage:', e);
    }
}

// Restore UI elements from state
function restoreUIFromState() {
    // Restore card size selection
    const sizeSelect = document.getElementById('cardSizeSelect');
    sizeSelect.value = state.cardSize;

    // Show/hide custom size inputs
    const customSizeDiv = document.getElementById('customSize');
    customSizeDiv.style.display = state.cardSize === 'custom' ? 'block' : 'none';

    // Restore custom size values
    document.getElementById('customWidth').value = state.customWidth;
    document.getElementById('customHeight').value = state.customHeight;

    // Restore set checkboxes
    document.querySelectorAll('input[name="set"]').forEach(checkbox => {
        checkbox.checked = state.selectedSets.includes(checkbox.value);
    });

    // Restore print options
    document.getElementById('blackAndWhite').checked = state.blackAndWhite;
    document.getElementById('inkSaving').checked = state.inkSaving;
    document.getElementById('printBacks').checked = state.printBacks;
    document.getElementById('compactHeaders').checked = state.compactHeaders;
    document.getElementById('noGaps').checked = state.noGaps;
    document.getElementById('noHeaders').checked = state.noHeaders;

    // Apply black and white mode if enabled
    document.body.classList.toggle('bw-mode', state.blackAndWhite);
    document.body.classList.toggle('ink-saving', state.inkSaving);
    document.body.classList.toggle('compact-headers', state.compactHeaders);
    document.body.classList.toggle('no-gaps', state.noGaps);
    document.body.classList.toggle('no-headers', state.noHeaders);

    // Update card size CSS variables
    updateCardSize();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initializeControls();
    restoreUIFromState();
    generateCards();
});

// Initialize control listeners
function initializeControls() {
    // Size dropdown
    const sizeSelect = document.getElementById('cardSizeSelect');
    sizeSelect.addEventListener('change', (e) => {
        state.cardSize = e.target.value;
        document.getElementById('customSize').style.display =
            e.target.value === 'custom' ? 'block' : 'none';
        updateCardSize();
        saveState();
    });

    // Custom size inputs
    document.getElementById('customWidth').addEventListener('input', () => {
        state.customWidth = parseFloat(document.getElementById('customWidth').value) || 63.5;
        updateCardSize();
        saveState();
    });
    document.getElementById('customHeight').addEventListener('input', () => {
        state.customHeight = parseFloat(document.getElementById('customHeight').value) || 88.9;
        updateCardSize();
        saveState();
    });

    // Set checkboxes
    document.querySelectorAll('input[name="set"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedSets);
    });

    // Print options
    document.getElementById('blackAndWhite').addEventListener('change', (e) => {
        state.blackAndWhite = e.target.checked;
        document.body.classList.toggle('bw-mode', e.target.checked);
        saveState();
    });

    document.getElementById('inkSaving').addEventListener('change', (e) => {
        state.inkSaving = e.target.checked;
        document.body.classList.toggle('ink-saving', e.target.checked);
        saveState();
    });

    document.getElementById('printBacks').addEventListener('change', (e) => {
        state.printBacks = e.target.checked;
        saveState();
    });

    document.getElementById('compactHeaders').addEventListener('change', (e) => {
        state.compactHeaders = e.target.checked;
        document.body.classList.toggle('compact-headers', e.target.checked);
        saveState();
    });

    document.getElementById('noGaps').addEventListener('change', (e) => {
        state.noGaps = e.target.checked;
        document.body.classList.toggle('no-gaps', e.target.checked);
        saveState();
    });

    document.getElementById('noHeaders').addEventListener('change', (e) => {
        state.noHeaders = e.target.checked;
        document.body.classList.toggle('no-headers', e.target.checked);
        saveState();
    });

    // Generate button
    document.getElementById('generateCards').addEventListener('click', generateCards);
}

// Update card size CSS variables
function updateCardSize() {
    const root = document.documentElement;
    let width, height;

    if (state.cardSize === 'custom') {
        width = state.customWidth;
        height = state.customHeight;
    } else {
        const size = CARD_SIZES[state.cardSize];
        width = size.width;
        height = size.height;
    }

    root.style.setProperty('--card-width', `${width}mm`);
    root.style.setProperty('--card-height', `${height}mm`);
}

// Update selected sets
function updateSelectedSets() {
    state.selectedSets = Array.from(document.querySelectorAll('input[name="set"]:checked'))
        .map(checkbox => checkbox.value);
    saveState();
}

// Generate and render cards
function generateCards() {
    const container = document.getElementById('cardContainer');
    container.innerHTML = '';

    // Collect cards from selected sets
    const cards = [];
    state.selectedSets.forEach(setName => {
        if (CARDS_DATA[setName]) {
            cards.push(...CARDS_DATA[setName]);
        }
    });

    // Render each card
    cards.forEach(card => {
        if (card.moves.length > 0) { // Only render cards with movement data
            const cardElement = createCardElement(card);
            container.appendChild(cardElement);
        }
    });

    // Add card backs if requested
    if (state.printBacks) {
        cards.forEach(card => {
            if (card.moves.length > 0) {
                const backElement = createCardBack();
                container.appendChild(backElement);
            }
        });
    }

    // Show message if no cards
    if (cards.filter(c => c.moves.length > 0).length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 40px; color: #666;">No cards with movement data available for the selected sets. Only the base game cards have movement data currently.</p>';
    }
}

// Create a card element
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = `card ${card.color}`;

    // Add mocked class if this is mocked data
    if (card.isMocked) {
        cardDiv.classList.add('mocked');
    }

    // Card name
    const nameDiv = document.createElement('div');
    nameDiv.className = 'card-name';
    nameDiv.textContent = card.name;
    cardDiv.appendChild(nameDiv);

    // Grid container
    const gridContainer = document.createElement('div');
    gridContainer.className = 'card-grid-container';

    // Check if this is a dual-grid card
    if (card.isDualGrid && card.alternateMoves) {
        gridContainer.classList.add('dual-grid');

        // Determine labels based on dual-grid type
        const topLabel = card.dualGridType === 'apprentice' ? 'Apprentice' : 'Piece';
        const bottomLabel = card.dualGridType === 'apprentice' ? 'Master' : 'Wind Spirit';

        // Primary movement grid (top)
        const topSection = document.createElement('div');
        topSection.className = 'grid-section';
        const topLabelEl = document.createElement('div');
        topLabelEl.className = 'grid-label';
        topLabelEl.textContent = topLabel;
        topSection.appendChild(topLabelEl);

        const topGrid = createMovementGrid(card.moves, false, true);
        topSection.appendChild(topGrid);
        gridContainer.appendChild(topSection);

        // Alternate movement grid (bottom)
        const bottomSection = document.createElement('div');
        bottomSection.className = 'grid-section';
        const bottomLabelEl = document.createElement('div');
        bottomLabelEl.className = 'grid-label';
        bottomLabelEl.textContent = bottomLabel;
        bottomSection.appendChild(bottomLabelEl);

        const bottomGrid = createMovementGrid(card.alternateMoves, false, true);
        bottomSection.appendChild(bottomGrid);
        gridContainer.appendChild(bottomSection);
    } else {
        // Single grid (normal card)
        const grid = createMovementGrid(card.moves);
        gridContainer.appendChild(grid);
    }

    cardDiv.appendChild(gridContainer);

    return cardDiv;
}

// Create movement grid
function createMovementGrid(moves, isSmall = false, isDualGrid = false) {
    const grid = document.createElement('div');

    if (isDualGrid) {
        // 3×5 grid for dual-grid cards (3 rows, 5 columns)
        grid.className = isSmall ? 'card-grid small dual-grid-size' : 'card-grid dual-grid-size';

        // Calculate bounds of moves
        let rowOffset = 0, colOffset = 0;
        if (moves.length > 0) {
            const minRow = Math.min(...moves.map(m => m[0]));
            const maxRow = Math.max(...moves.map(m => m[0]));
            const minCol = Math.min(...moves.map(m => m[1]));
            const maxCol = Math.max(...moves.map(m => m[1]));

            // Check if moves exceed grid bounds (rows: -1 to 1, cols: -2 to 2)
            // If they're 1 cell outside, shift all moves to fit
            if (maxRow > 1) rowOffset = 1 - maxRow;
            if (minRow < -1) rowOffset = -1 - minRow;
            if (maxCol > 2) colOffset = 2 - maxCol;
            if (minCol < -2) colOffset = -2 - minCol;
        }

        // Apply offset to moves
        const adjustedMoves = moves.map(([row, col]) => [row + rowOffset, col + colOffset]);

        // Center position is also offset
        const centerRow = 0 + rowOffset;
        const centerCol = 0 + colOffset;

        // Create 3×5 grid (3 rows: -1, 0, 1; 5 columns: -2, -1, 0, 1, 2)
        for (let row = 1; row >= -1; row--) { // Top to bottom (forward to backward)
            for (let col = -2; col <= 2; col++) { // Left to right
                const cell = document.createElement('div');
                cell.className = 'grid-cell';

                // Center position (offset if moves were shifted)
                if (row === centerRow && col === centerCol) {
                    cell.classList.add('center');
                }

                // Check if this position is a valid move
                const isMove = adjustedMoves.some(move => move[0] === row && move[1] === col);
                if (isMove) {
                    cell.classList.add('move');
                }

                grid.appendChild(cell);
            }
        }
    } else {
        // 5×5 grid for normal cards
        grid.className = isSmall ? 'card-grid small' : 'card-grid';

        for (let row = 2; row >= -2; row--) { // Top to bottom (forward to backward)
            for (let col = -2; col <= 2; col++) { // Left to right
                const cell = document.createElement('div');
                cell.className = 'grid-cell';

                // Center position
                if (row === 0 && col === 0) {
                    cell.classList.add('center');
                }

                // Check if this position is a valid move
                const isMove = moves.some(move => move[0] === row && move[1] === col);
                if (isMove) {
                    cell.classList.add('move');
                }

                grid.appendChild(cell);
            }
        }
    }

    return grid;
}

// Create card back
function createCardBack() {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card card-back';

    const text = document.createElement('div');
    text.textContent = 'ONITAMA';
    cardDiv.appendChild(text);

    return cardDiv;
}
