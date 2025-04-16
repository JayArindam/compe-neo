import Computer from "../models/computerModel.js";
import fs from 'fs';

const listComputer = async (req, res) => {
    try {
        const computers = await Computer.findAll();
        res.status(200).json({ success: true, data: computers });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching computer models" });
    }
};

const addComputer = async (req, res) => {
    
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Image not uploaded!" });
    }

    const image_filename = req.file.filename;

    try {
        await Computer.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });
        res.status(201).json({ success: true, message: "Computer model Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding computer model" });
    }
};

const removeComputer = async (req, res) => {
    const id = req.body.id;
    try {
        const computer = await Computer.findByPk(id);
        if (!computer) {
            return res.status(404).json({ success: false, message: "Computer model not found" });
        }

        // Delete image file if it exists
        const imagePath = `uploads/${computer.image}`;
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        await computer.destroy();
        res.status(200).json({ success: true, message: "Computer model Removed" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing computer model" });
    }
};

export { listComputer, addComputer, removeComputer };