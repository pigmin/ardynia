#ifndef util_h
#define util_h

#include <Arduino.h>
#include "math.h"

uint8_t clamp(int8_t val, int8_t minVal, int8_t maxVal);


#define SERIAL_LOG 0

#define LOG(msg) \
    do { if (SERIAL_LOG) Serial.println(msg); } while (0)

#endif

