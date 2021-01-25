
[//]: # (Object configuration)
[//]: # (Objects)

This page details common values for all Terra objects.

## id
The ID of this object. Any string will work as an ID, though it is generally recommended to use UPPER_SNAKE_CASE for
object IDs.   
**This value is required for all configs**

## extends
This key holds the ID of the object this object extends. It is optional. If included, any abstractable keys
missing from this object will be pulled from its super object. Super objects may be abstract or standard objects.
Terra supports multiple inheritance (i.e. A extends B, B extends C. In this scenario, A would pull options from
itself first, then missing values from B, then still missing values from C).

## abstract
This boolean key defines whether this object is abstract. An abstract object cannot be generated in the world. It holds
config values to be used in multiple *implementation* objects. Abstract objects have the unique property of all config
values being optional.