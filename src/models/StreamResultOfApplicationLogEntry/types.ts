import { ApplicationLogEntryModelOptions as ApplicationLogEntry } from '../ApplicationLogEntry';
import { RuntimeStreamErrorModelOptions as RuntimeStreamError } from '../RuntimeStreamError';

export interface StreamResultOfApplicationLogEntryModelOptions {
  error?: RuntimeStreamError;
  result?: ApplicationLogEntry;
}
