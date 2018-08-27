#ifndef boomerang_h
#define boomerang_h

#include <Arduboy2.h>
#include "entity.h"
#include "baseEntity.h"
#include "entityTypes.h"
#include "renderer.h"

struct Boomerang {
    static const uint8_t v = 3;
    static EntityType spawn(Entity* me, BaseEntity* player);
    static EntityType update(Entity* me, BaseEntity* player, Arduboy2* arduboy, uint8_t frame);
    static EntityType render(Entity* me, Renderer* renderer, uint8_t frame);
};

#endif
