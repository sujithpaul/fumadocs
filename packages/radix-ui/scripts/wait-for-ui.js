#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uiDist = path.resolve(__dirname, '../../ui/dist/typography/index.js');
const maxTries = 120; // 12 seconds max wait
let tries = 0;
let stableCount = 0;

function check() {
  if (fs.existsSync(uiDist)) {
    // Check if file is stable (exists for 3 consecutive checks = 300ms)
    stableCount++;
    if (stableCount >= 3) {
      // Verify file is readable and has content
      try {
        const stats = fs.statSync(uiDist);
        if (stats.size > 0) {
          console.log('✓ @fumadocs/ui/dist/typography/index.js found and ready');
          process.exit(0);
        }
      } catch (err) {
        // File might still be writing, continue waiting
        stableCount = 0;
      }
    }
  } else {
    stableCount = 0;
  }
  
  if (tries++ >= maxTries) {
    console.error(`✗ Timeout waiting for @fumadocs/ui to build`);
    console.error(`  Expected file: ${uiDist}`);
    console.error(`  File exists: ${fs.existsSync(uiDist)}`);
    process.exit(1);
  }
  
  if (tries === 1) {
    console.log(`Waiting for @fumadocs/ui/dist/typography/index.js...`);
  }
  
  setTimeout(check, 100);
}

check();

