#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// First, do an initial build to ensure dist/typography/index.js exists
console.log('Building @fumadocs/ui (initial build)...');
const build = spawn('tsdown', [], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: true,
});

build.on('close', (code) => {
  if (code !== 0) {
    console.error('Initial build failed');
    process.exit(code);
  }
  
  // Then start watch mode
  console.log('Starting watch mode...');
  const watch = spawn('tsdown', ['--watch'], {
    cwd: rootDir,
    stdio: 'inherit',
    shell: true,
  });
  
  watch.on('close', (code) => {
    process.exit(code);
  });
  
  // Handle process termination
  process.on('SIGINT', () => {
    watch.kill('SIGINT');
  });
  process.on('SIGTERM', () => {
    watch.kill('SIGTERM');
  });
});
