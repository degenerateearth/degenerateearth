---
title: Obelisk
---

The Obelisk is an experimental knowledge-preservation project: a sequence of visual lessons intended to help an unknown reader reconstruct foundational ideas without shared language, inherited notation, or powered technology.

The first complete design prototype now exists. It uses the supplied blank monument as an eighteen-panel teaching surface and assigns one subject to each face:

1. arithmetic
2. geometry
3. physics
4. chemistry

Across those faces are **57 illustrated lesson rows**. The drawings form a dependency chain. Later panels may use only objects, marks, operations, and relationships established earlier.

<img width="1400" height="840" alt="Two rendered views of the Codex obelisk showing all four teaching faces" src="/assets/codex-preview.jpg" />

> *If all memory is lost, can understanding be rebuilt from stone alone?*

---

## What changed in prototype one

The project has advanced from one arithmetic reference panel to a complete four-face model. The work completed in this pass includes:

- an editable Blender model and portable GLB export
- eighteen scalable vector panel masters
- a numbered reading route across unequal panel arrangements
- four subject curricula expressed as physical demonstrations and diagrams
- numerical and boundary checks on the generated artwork
- a written intuitiveness audit separating demonstrated meaning from untested assumptions

The arithmetic source remains the starting point, but it was redrawn. Its conflicting subtraction example was corrected by visibly dividing nine stones into six retained and three removed. Zero is grounded in an empty outlined tray, equality in one-to-one correspondence, multiplication in equal groups, and base ten in ten-object bundles and a ten-by-ten array.

This is a **design-complete prototype**, not a validated universal language. It proves that the proposed curriculum can be drawn, ordered, checked, and fitted to the monument. It does not yet prove that an unbriefed reader will infer every intended meaning.

---

## Reading order

The panels use consecutive numbered cartouches. A small arrow at the bottom of each panel points to the number of the next panel. One, two, three, or four dots identify the subject face.

- Face One reads downward across three broad panels.
- Face Two reads downward across five narrow panels.
- Face Three reads across each row of the six-panel rear face.
- Face Four reads downward across four panels.

The navigation system is itself an encoding proposal. It needs to be tested with readers who have not seen the plan.

---

## Face One — Arithmetic

<img width="1000" height="1530" alt="Rendered arithmetic face of the Codex obelisk" src="/assets/codex-arithmetic.jpg" />

### Objective

Build enough numerical language to support every later face.

### Dependency sequence

1. recognizable stones correspond to quantities from zero through nine
2. objects, tally marks, and numerals are paired one to one
3. visible combination introduces addition
4. visible partition introduces subtraction
5. repeated equal groups introduce multiplication
6. ten-object bundles and a hundred-cell array establish decimal grouping
7. equal sharing introduces division
8. matching half-tiles reconstruct a whole and introduce fractions

### Current assessment

All complete numerical equations in the generated panels passed the arithmetic check. The meaning of equality and the slash still depends on the reader recognizing repeated structural relationships rather than treating the marks as decoration.

---

## Face Two — Geometry

<img width="1000" height="1530" alt="Rendered geometry face of the Codex obelisk" src="/assets/codex-geometry.jpg" />

### Objective

Turn counting into repeatable spatial construction and measurement.

### Dependency sequence

1. a slack cord becomes a straight measured segment between two pegs
2. repeated cord lengths establish linear measure
3. crossings, parallel lines, folds, and square corners establish direction
4. a full turn is divided into halves and quarters
5. polygons are counted by sides; mirrored halves introduce symmetry
6. removed triangle corners are arranged along half a turn
7. boundary counting is separated from tiled area
8. dissection gives triangle area and shearing gives parallelogram area
9. unit squares on a 3–4–5 triangle demonstrate the right-triangle relation
10. scaled triangles and grids distinguish length scale from area scale
11. a taut rotating cord constructs a circle; its rim is compared with its diameter
12. increasingly fine square grids introduce curved-area approximation
13. unit cubes establish volume and a six-square net establishes surface area

### Current assessment

The 3–4–5 construction is exact for the pictured triangle. The corner rearrangement begins with an equilateral example and does not by itself prove the angle sum for every triangle. Circle area is presented as successive approximation, avoiding a false exact equality to a finite grid.

---

## Face Three — Physics

<img width="1000" height="1530" alt="Rendered physics face of the Codex obelisk" src="/assets/codex-physics.jpg" />

### Objective

Teach repeatable observation, comparison, and elementary cause through apparatus that can be rebuilt from ordinary materials.

### Dependency sequence

1. a pendulum return defines a repeatable interval
2. distance divided by equal intervals compares motion
3. dropped-stone positions show increasing separation over equal intervals
4. equal-arm and unequal-arm balances compare quantity and torque
5. a long lever trades movement distance for lifting force
6. ramps, rolling stones, and rough tracks compare work and friction
7. a hanging cord and still water establish vertical and horizontal references
8. water displacement links submerged volume to a measurable level change
9. equal volumes with different balance results motivate density
10. floating, sinking, and water jets establish fluid behavior
11. ice, liquid water, vapor, condensation, shadows, and reflected rays establish heat and light phenomena
12. vibrating cords and controlled comparisons establish sound and experimental method

### Current assessment

The apparatus must be reconstructed with matched reference stones and vessels. Lever products assume a light beam, low-friction pivot, and static balance. Motion traces are diagrams of successive observations, not literal simultaneous objects.

---

## Face Four — Chemistry

<img width="1000" height="1530" alt="Rendered chemistry face of the Codex obelisk" src="/assets/codex-chemistry.jpg" />

### Objective

Move from visible material sorting to conservation and a deliberately cautious model of unseen composition.

### Dependency sequence

1. mixed objects are sorted by persistent shape
2. muddy water settles and its clearer layer is poured away
3. a woven filter retains coarse insoluble grains
4. soluble crystals disappear in water and return after evaporation
5. filtration separates sand from dissolved material
6. condensation collects transferred water separately from residue
7. reversible ice melting is contrasted with wood charring
8. raw and fired clay are compared through their behavior in water
9. a sealed room-temperature mixture balances before and after combining
10. repeated subdivision motivates a finer-grained material model
11. paired circles and squares rearrange while preserving the count of each kind

### Current assessment

The particle model is the largest interpretive leap. Repeated subdivision does not prove atoms, bonding, or atomic shape. The final panel offers a useful model and a conservation rule; it does not claim unaided microscopic observation or identify particular elements.

---

## Verification and open work

The current automated checks found:

- 18 panels present
- 57 lesson rows documented
- 41 complete numerical equations correct
- no vector drawing points outside their panel boundaries
- a self-contained GLB with no external textures
- curriculum metadata attached to all 18 teaching meshes

Visual review led to revisions in subtraction, the Pythagorean layout, water surfaces, sediment placement, conservation balance, and the circle scale.

The next meaningful test is human interpretation. Unbriefed readers should be given one face at a time with stones, trays, cord, water, and simple balances, then asked to reproduce the illustrated process without verbal coaching. Repeated misreadings belong in the project record and should drive the next revision.

Fabrication is a separate stage. The prototype uses shallow positive mesh inlays for review. A physical monument needs tested engraving depth, minimum stroke width, accessible panel height, weathering trials, and redundant copies in separated locations.

The core lesson remains unchanged:

> *Knowing something is not the same as being able to teach it from zero.*

