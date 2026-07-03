# Local 3D models

Drop your `.glb` or `.gltf` interior models in this folder.

Then reference them from `src/data/models.ts`, for example:

```ts
{
  id: 'my-interior',
  name: 'My Interior',
  description: 'A local interior model.',
  type: 'local',
  modelPath: '/models/my-interior.glb',
}
```

Files placed in `public/` are served from the site root, so a file at
`public/models/my-interior.glb` is available at `/models/my-interior.glb`.

> Tip: keep `.glb` files reasonably small (ideally under ~10 MB) and
> web-optimised (Draco/meshopt compression) for fast loading.
