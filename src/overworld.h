#ifndef overworld_h
#define overworld_h

#include "emptyRoom.h"


const uint8_t PROGMEM overworld_map[538] = {
    // array length (16 bit, little endian), map width, map height (in rooms)
    26, 2, 7, 8,
    // room indices (16 bit, little endian), 112 bytes
    0, 0, 11, 0, 20, 0, 25, 0, 32, 0, 35, 0, 39, 0, 47, 0, 56, 0, 62, 0, 67, 0, 76, 0, 87, 0, 95, 0, 100, 0, 111, 0, 117, 0, 122, 0, 129, 0, 137, 0, 145, 0, 156, 0, 162, 0, 172, 0, 175, 0, 178, 0, 184, 0, 188, 0, 197, 0, 204, 0, 210, 0, 215, 0, 222, 0, 230, 0, 238, 0, 248, 0, 0, 1, 4, 1, 14, 1, 21, 1, 26, 1, 34, 1, 46, 1, 55, 1, 60, 1, 66, 1, 76, 1, 85, 1, 92, 1, 103, 1, 111, 1, 120, 1, 128, 1, 137, 1, 146, 1, 155, 1,
    // compressed room data, 422 bytes
    31, 109, 32, 68, 0, 2, 4, 64, 0, 47, 96, 214, 245, 208, 111, 96, 111, 96, 111, 80, 247, 223, 240, 246, 0, 221, 245, 64, 15, 84, 254, 0, 254, 79, 224, 254, 79, 208, 96, 251, 72, 121, 246, 12, 244, 100, 68, 47, 96, 102, 95, 70, 47, 96, 47, 96, 6, 245, 15, 118, 254, 0, 247, 15, 118, 253, 4, 247, 15, 118, 245, 6, 100, 244, 6, 96, 247, 6, 102, 244, 6, 102, 244, 6, 102, 244, 0, 246, 6, 246, 6, 246, 6, 246, 4, 251, 111, 228, 0, 64, 47, 96, 68, 244, 4, 68, 244, 4, 68, 245, 0, 247, 4, 246, 4, 253, 0, 246, 4, 255, 15, 96, 79, 64, 102, 245, 6, 111, 224, 102, 111, 64, 102, 111, 240, 0, 0, 246, 4, 246, 6, 246, 6, 247, 0, 244, 64, 4, 102, 244, 14, 102, 244, 14, 246, 14, 68, 245, 15, 244, 246, 64, 247, 4, 246, 4, 102, 101, 100, 79, 80, 64, 254, 15, 228, 254, 15, 228, 254, 4, 246, 4, 246, 0, 255, 15, 192, 64, 246, 14, 246, 14, 246, 14, 68, 15, 68, 247, 66, 246, 2, 246, 15, 116, 79, 80, 79, 224, 79, 96, 247, 79, 240, 15, 84, 247, 79, 80, 68, 245, 15, 148, 79, 96, 79, 96, 79, 96, 79, 96, 246, 4, 246, 4, 246, 4, 15, 100, 68, 15, 68, 246, 14, 246, 14, 244, 64, 68, 247, 66, 246, 2, 246, 2, 246, 0, 79, 240, 252, 0, 0, 245, 64, 15, 84, 0, 245, 64, 15, 84, 248, 79, 96, 79, 96, 247, 64, 79, 240, 245, 15, 116, 15, 100, 4, 246, 4, 245, 15, 116, 244, 64, 68, 0, 4, 4, 79, 80, 68, 64, 15, 68, 47, 96, 47, 96, 47, 96, 47, 80, 64, 255, 15, 96, 79, 96, 0, 245, 79, 240, 245, 4, 247, 79, 80, 68, 245, 4, 68, 244, 4, 64, 72, 121, 244, 79, 96, 79, 96, 247, 64, 247, 79, 224, 64, 0, 68, 64, 64, 15, 84, 0, 245, 64, 15, 84, 0, 244, 64, 47, 80, 79, 118, 47, 80, 79, 118, 79, 96, 102, 245, 4, 111, 80, 247, 96, 246, 4, 246, 4, 246, 4, 247, 96, 79, 64, 68, 79, 96, 79, 96, 247, 96, 68, 72, 121, 79, 96, 79, 96, 79, 118, 64, 0, 244, 79, 96, 79, 96, 247, 96, 64, 15, 68, 0, 15, 68, 0, 15, 68, 247, 96
};

const uint8_t PROGMEM overworld_room0_0[] = {
    2, // number of entities

    // entity 0, SECRET_WALL
    0x10,
    6 << 4 | 8, // x/8 | y/4

    // entity 1, TELEPORTER
    0x6c,
    6 << 4 | 8, // x/8 | y/4
};



const uint8_t PROGMEM overworld_room0_4[] = {
    1, // number of entities

    // entity 0, BLOB
    0x7,
    3 << 4 | 7, // x/8 | y/4
};



const uint8_t PROGMEM overworld_room0_7[] = {
    2, // number of entities

    // entity 0, BLOB
    0x7,
    3 << 4 | 2, // x/8 | y/4

    // entity 1, CHEST
    0x26,
    3 << 4 | 9, // x/8 | y/4
};



const uint8_t PROGMEM overworld_room1_3[] = {
    2, // number of entities

    // entity 0, TRIGGER_DOOR
    0x11,
    8 << 4 | 11, // x/8 | y/4

    // entity 1, SWITCH
    0x12,
    3 << 4 | 4, // x/8 | y/4
};



const uint8_t PROGMEM overworld_room1_6[] = {
    2, // number of entities

    // entity 0, BLOB
    0x7,
    3 << 4 | 9, // x/8 | y/4

    // entity 1, BLOB
    0x7,
    5 << 4 | 12, // x/8 | y/4
};



const uint8_t PROGMEM overworld_room1_7[] = {
    1, // number of entities

    // entity 0, CHEST
    0x86,
    9 << 4 | 5, // x/8 | y/4
};



const uint8_t PROGMEM overworld_room2_2[] = {
    1, // number of entities

    // entity 0, CHEST
    0x46,
    3 << 4 | 4, // x/8 | y/4
};



const uint8_t PROGMEM overworld_room4_6[] = {
    1, // number of entities

    // entity 0, TELEPORTER
    0x2c,
    4 << 4 | 1, // x/8 | y/4
};



const uint8_t PROGMEM overworld_room4_7[] = {
    1, // number of entities

    // entity 0, TELEPORTER
    0x4c,
    8 << 4 | 2, // x/8 | y/4
};



const uint8_t PROGMEM overworld_room6_0[] = {
    1, // number of entities

    // entity 0, TELEPORTER
    0xc,
    10 << 4 | 6, // x/8 | y/4
};

const uint8_t PROGMEM overworld_teleporters[] = {
    // dest x, dest y (in rooms)
    1, 2,
    8, 5,
    0, 5,
    0, 0,
};





const uint8_t * const PROGMEM overworld_row0[7] = {
    overworld_room0_0,
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    overworld_room6_0
};


const uint8_t * const PROGMEM overworld_row1[7] = {
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    empty_room
};


const uint8_t * const PROGMEM overworld_row2[7] = {
    empty_room,
    empty_room,
    overworld_room2_2,
    empty_room,
    empty_room,
    empty_room,
    empty_room
};


const uint8_t * const PROGMEM overworld_row3[7] = {
    empty_room,
    overworld_room1_3,
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    empty_room
};


const uint8_t * const PROGMEM overworld_row4[7] = {
    overworld_room0_4,
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    empty_room
};


const uint8_t * const PROGMEM overworld_row5[7] = {
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    empty_room,
    empty_room
};


const uint8_t * const PROGMEM overworld_row6[7] = {
    empty_room,
    overworld_room1_6,
    empty_room,
    empty_room,
    overworld_room4_6,
    empty_room,
    empty_room
};


const uint8_t * const PROGMEM overworld_row7[7] = {
    overworld_room0_7,
    overworld_room1_7,
    empty_room,
    empty_room,
    overworld_room4_7,
    empty_room,
    empty_room
};


const uint8_t * const* const PROGMEM overworld_entities[8] = {
    overworld_row0,
    overworld_row1,
    overworld_row2,
    overworld_row3,
    overworld_row4,
    overworld_row5,
    overworld_row6,
    overworld_row7
};


#endif