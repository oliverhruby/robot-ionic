import { Injectable } from '@angular/core';

@Injectable()
export class SynthesisService {

    private audioContext: AudioContext;
    private targetNode: AudioNode;

    constructor() { }

    public setup(audioContext: AudioContext, targetNode: AudioNode) {
        this.audioContext = audioContext;
        this.targetNode = targetNode;
    }
}